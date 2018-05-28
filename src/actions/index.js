import * as joomlaApi from '../api/joomla'
import * as actConstants from '../constants/actions'
import _ from 'underscore'
import * as generalConstants from '../constants/general'
import * as libs from '../libs/libs'
import globalVars from '../libs/globalVariables'

// silvertodo: saving data in nested type is strongly unrecommended, need to improve later
export function init(options) {
	const { root, path, selected, type } = options
	return dispatch => {
		type && dispatch(setFileType(type))
		const getFilesAndExpand = p => new Promise(resolve => {
			resolve(dispatch(getAllFiles(p)))
		})
		const tasks = []
		_.reduce(path.split('/').slice(0, -1), (path, dir) => {
			path += dir + '/'
			if(path !== '/') {
				tasks.push(getFilesAndExpand(path))
			}
			return path
		}, '')
		Promise.all(tasks).then(() => {
			root &&	dispatch(setRoot(root))
			dispatch(getAllFiles(root))
			_.reduce(path.split('/').slice(0, -1), (path, dir) => {
				path += dir + '/'
				if(path !== '/') {
					dispatch(expandTreeNode(path))
				}
				return path
			}, '')
			dispatch(setCurrentPath(path))
			selected && dispatch(selectFile(selected))
		})
	}
}

export function getAllFiles(path) {
	return (dispatch, getState) => {
		const { fileType } = getState().fileReducer

		joomlaApi.getAllFiles(path, fileType).done(res => {
			dispatch({
				type:actConstants.GET_ALL_FILES,
				path,
				files: libs.parseJSON(res).sort((a, b) => {
					return a.type !== b.type ?
						(a.type > b.type ? 1 :  -1) : (a.name > b.name ? 1 : -1)
				})
			})
		})
	}
}

export function setCurrentPath(path) {
	libs.setPathToLocal(path)
	return dispatch => {
		dispatch({
			type: actConstants.SET_CURRENT_PATH,
			path
		})
		dispatch(deselectFile())
	}
}

export function fetchFiles(path) {
	return dispatch => {
		dispatch(getAllFiles(path))
		dispatch(setCurrentPath(path))
	}
}

export function expandTreeNode(path) {
	return {
		type: actConstants.EXPAND_TREE_NODE,
		path: path
	}
}

export function checkAndExpand(path) {
	return (dispatch, getState) => {
		const { treeNodes } = getState().fileReducer
		if (libs.getNodeByPath(treeNodes, path).children === undefined) {
			dispatch(getAllFiles(path))
		}
		dispatch(expandTreeNode(path))
	}
}

export function collapseTreeNode(path) {
	return {
		type: actConstants.COLLAPSE_TREE_NODE,
		path: path
	}
}

export function changeViewType(v) {
	return {
		type: actConstants.CHANGE_VIEW_TYPE,
		viewType: v
	}
}

export function toggleSidebar() {
	return {
		type: actConstants.TOGGLE_SIDEBAR
	}
}

export function updateSearchString(k) {
	return dispatch => {
		dispatch({
			type: actConstants.UPDATE_SEARCH_STRING,
			keyWord: k
		})
		dispatch(deselectFile())
	}
}

export function addUploadingFile(files, file, willSelect) {
	// Format the file name, replace all the special characters to _
	const formatFileName = n => {
		return n.replace(/[^\w]/gi, '_')
	}

	const splitExtension = (name) => {
		const pos = name.lastIndexOf('.')
		return pos !== -1 ? [name.substr(0, pos), name.substr(pos)] : [name, '']
	}
	const [fileName, fileExt] = splitExtension(file.name) // current file
	const lastIndex = _.reduce(files, (result, f) => {
		if (f.type !== 'file') return result // if it's not file, do nothing
		const [fName, fExt] = splitExtension(f.name)
		// Check file upload name
		// if file name or file extension of the current uploading file is different from the file in the currentFiles, do nothing
		if (fileExt != fExt || fName.substr(0, formatFileName(fileName).length) !== formatFileName(fileName)) 
			return result
		// In case there are some files with the same name with upload file, we need to add some index to upload file
		// For example: image.jpg, image(1).jpg, image(2).jpg, etc.
		const suffix = formatFileName(fName).substr(formatFileName(fileName).length)
		const index = suffix === ''? 0 : parseInt(suffix.replace('_',''))
		return Math.max(result, index)
	}, -1)
	const newFileName = lastIndex === -1? `${formatFileName(fileName)}${fileExt}` : `${formatFileName(fileName)}_${lastIndex + 1}${fileExt}`
	// End

	return {
		type: actConstants.ADD_UPLOADING_FILE,
		name: newFileName,
		willSelect,
		file
	}
}

export function onUploadSuccess(f) {
	return {
		type: actConstants.UPLOAD_SUCCESS,
		file: f
	}
}

export function handleUploadFile(path, file, fileName, onProcess) {
	return function(dispatch) {
		joomlaApi.handleUploadFile(path, file, fileName, onProcess).then(res => {
			const result = libs.parseJSON(res)
			if (result && result.message === 'done') {
				const uploadedFile = _.find(result.list, item => {
					return item.name === fileName
				})
				delete uploadedFile.key
				dispatch(onUploadSuccess(uploadedFile))
				dispatch(
					addMessage({
						type: generalConstants.TOAST_SUCCESS,
						content: 'Upload successfully.',
						duration: 2000
					})
				)
			} else {
				dispatch(onDeleteFileSuccess(fileName))
				dispatch(
					addMessage({
						type: generalConstants.TOAST_ERROR,
						content:
							'File is not uploaded, please recheck the file type.',
						duration: 2000
					})
				)
			}
		})
	}
}

export function handleUploadFiles(currentFiles, uploadFiles) {
	return (dispatch) => {
		_.each(uploadFiles, file => dispatch(
			addUploadingFile(currentFiles, file, uploadFiles.length === 1)
		))
	}
}

export function onCreateFolderSuccess(f) {
	return {
		type: actConstants.CREATE_FOLDER_SUCCESS,
		file: f
	}
}

export function createFolder(path, files) {
	const getLastIndOfSameName = name => {
		//find the last ind
		const lastInd = _.chain(files)
			.filter(child => {
				return child.type === 'dir'
			})
			.map(child => {
				const int = parseInt(child.name.replace(`${name} `, '0'), 10)
				return !isNaN(int)
					? int
					: parseInt(child.name.replace(`${name}`, '0'), 10) || 0
			})
			.sortBy(num => {
				return num
			})
			.last()
			.value()
		return lastInd
	}
	const nextInd =
		getLastIndOfSameName(generalConstants.DEFAULT_NEW_FOLDER_NAME) + 1
	const name = `${generalConstants.DEFAULT_NEW_FOLDER_NAME} ${!isNaN(nextInd)
		? nextInd
		: ''}`
	return function(dispatch) {
		joomlaApi.createFolder(path, name).done(res => {
			const result = libs.parseJSON(res)
			if (result.success) {
				const folder = {
					name: name,
					type: 'dir'
				}
				dispatch(onCreateFolderSuccess(folder))
				dispatch(
					addMessage({
						type: generalConstants.TOAST_SUCCESS,
						content: 'Create folder successfully.',
						duration: 2000
					})
				)
			}
		})
	}
}

export function onRenameFolderSuccess(on, nn) {
	return {
		type: actConstants.RENAME_FOLDER_SUCCESS,
		oldName: on,
		newName: nn
	}
}

export function renameFolder(path, newPath, currentPath, onRenameFail) {
	return function(dispatch) {
		const folderName = newPath.substring(newPath.lastIndexOf('/')+1, newPath.length)
		if (path !== newPath && !/[^\w]/.test(folderName)) {
			const oldName = path.replace(currentPath, '')
			const newName = newPath.replace(currentPath, '')
			joomlaApi.renameFolder(path, newPath).done(res => {
				const result = libs.parseJSON(res)
				if (result.success) {
					dispatch(onRenameFolderSuccess(oldName, newName))
					dispatch(
						addMessage({
							type: generalConstants.TOAST_SUCCESS,
							content: 'Rename folder successfully.',
							duration: 2000
						})
					)
				} else {
					onRenameFail()
					dispatch(
						addMessage({
							type: generalConstants.TOAST_ERROR,
							content:
								'Rename folder failed, please check it again.',
							duration: 2000
						})
					)
				}
			})
		} else {
			onRenameFail()
			dispatch(
				addMessage({
					type: generalConstants.TOAST_ERROR,
					content: 'Rename folder failed, folder name is not allowed to have special characters.',
					duration: 2000
				})
			)
		}
	}
}

export function onRenameFileSuccess(on, nn) {
	return {
		type: actConstants.RENAME_FILE_SUCCESS,
		oldName: on,
		newName: nn
	}
}

export function renameFile(path, newPath, currentPath, onRenameFail) {
	return function(dispatch, getState) {
		const selectedFile = getState().fileReducer.selectedFile
		const fileName = newPath.substring(newPath.lastIndexOf('/')+1, newPath.lastIndexOf('.'))
		if (path !== newPath && !/[^\w]/.test(fileName)) {
			const oldName = path.replace(currentPath, '')
			const newName = newPath.replace(currentPath, '')
			joomlaApi.renameFile(path, newPath).done(res => {
				const result = libs.parseJSON(res)
				if (result.success) {
					dispatch(onRenameFileSuccess(oldName, newName))
					path === selectedFile && dispatch(selectFile(newPath))
					dispatch(
						addMessage({
							type: generalConstants.TOAST_SUCCESS,
							content: 'Rename file successfully.',
							duration: 2000
						})
					)
				} else {
					onRenameFail()
					dispatch(
						addMessage({
							type: generalConstants.TOAST_ERROR,
							content: 'Rename file failed, please check again.',
							duration: 2000
						})
					)
				}
			})
		} else {
			onRenameFail()
			dispatch(
				addMessage({
					type: generalConstants.TOAST_ERROR,
					content: 'Rename file failed, file name is not allowed to have special characters.',
					duration: 2000
				})
			)
		}
	}
}

export function chooseFile(p) {
	const event = new CustomEvent('choose-file', {
		detail: p && p.substr(1) //remove '/' from head of path
	})
	document.dispatchEvent(event)
	return {
		type: actConstants.CHOOSE_FILE,
		path: p
	}
}

export function selectFile(p) {
	const event = new CustomEvent('select-file', {
		detail: p && p.substr(1)
	})
	document.dispatchEvent(event)
	return {
		type: actConstants.SELECT_FILE,
		path: p
	}
}

export function deselectFile() {
	const event = new CustomEvent('deselect-file')
	document.dispatchEvent(event)
	return {
		type: actConstants.DESELECT_FILE
	}
}

export function onDeleteFileSuccess(fn) {
	return {
		type: actConstants.DELETE_FILE_SUCCESS,
		name: fn
	}
}

export function deleteFile(path, currentPath, mode) {
	return function(dispatch, getState) {
		const selectedFile = getState().fileReducer.selectedFile
		const fileName = path.replace(currentPath, '')
		if (mode === 'multi') {
			joomlaApi.deleteFile(path).done(res => {
				const result = libs.parseJSON(res)
				if (result.success) {
					dispatch(onDeleteFileSuccess(fileName))
					path === selectedFile && dispatch(deselectFile())
				}
			})
		} else {
			const cResult = confirm('Are you sure you want to delete?')
			if (cResult) {
				joomlaApi.deleteFile(path).done(res => {
					const result = libs.parseJSON(res)
					if (result.success) {
						dispatch(onDeleteFileSuccess(fileName))
						path === selectedFile && dispatch(deselectFile())
						dispatch(
							addMessage({
								type: generalConstants.TOAST_SUCCESS,
								content: 'Delete successfully.',
								duration: 2000
							})
						)
					}
				})
			}
		}
	}
}

export function onDeleteFolderSuccess(fn) {
	return {
		type: actConstants.DELETE_FOLDER_SUCCESS,
		name: fn
	}
}

export function deleteFolder(path, currentPath, mode) {
	return function(dispatch) {
		const folderName = path.replace(currentPath, '')
		if (mode === 'multi') {
			joomlaApi.deleteFolder(path).done(res => {
				const result = libs.parseJSON(res)
				if (result.success) {
					dispatch(onDeleteFolderSuccess(folderName))
				}
			})
		} else {
			const cResult = confirm('Are you sure you want to delete?')
			if (cResult) {
				joomlaApi.deleteFolder(path).done(res => {
					const result = libs.parseJSON(res)
					if (result.success) {
						dispatch(onDeleteFolderSuccess(folderName))
						dispatch(
							addMessage({
								type: generalConstants.TOAST_SUCCESS,
								content: 'Delete folder successfully.',
								duration: 2000
							})
						)
					}
				})
			}
		}
	}
}

export function selectMultiFileAdd(p) {
	return {
		type: actConstants.SELECT_MULTI_FILE_ADD,
		path: p
	}
}

export function selectMultiFileRemove(p) {
	return {
		type: actConstants.SELECT_MULTI_FILE_REMOVE,
		path: p
	}
}

export function deleteFilesSuccess() {
	return {
		type: actConstants.DELETE_FILES_SUCCESS
	}
}

export function deleteMultiFiles(
	files,
	currentPath
) {
	return function(dispatch) {
		const cResult = confirm('Are you sure you want to delete?')
		if (cResult) {
			for (let i = 0; i < files.length; i++) {
				if (files[i].match(/\./)) {
					if (globalVars.get('fileType') === generalConstants.TYPE_FILE) {
						dispatch(
							deleteFile(
								files[i],
								currentPath,
								'multi'
							)
						)
					} else {
						if (libs.isMedia(files[i])) {
							dispatch(
								deleteFile(
									files[i],
									currentPath,
									'multi'
								)
							)
						}
					}
				} else {
					dispatch(
						deleteFolder(
							files[i],
							currentPath,
							'multi'
						)
					)
				}
			}
			dispatch(deleteFilesSuccess())
			dispatch(
				addMessage({
					type: generalConstants.TOAST_SUCCESS,
					content: 'Delete files successfully.',
					duration: 2000
				})
			)
		}
	}
}

export function addMessage(message) {
	return function(dispatch) {
		dispatch(showMessage(message))
		setTimeout(() => {
			dispatch(hideMessage(message))
		}, message.duration)
	}
}

export function showMessage(m) {
	return {
		type: actConstants.SHOW_MESSAGE,
		message: m
	}
}

export function hideMessage(m) {
	return {
		type: actConstants.HIDE_MESSAGE,
		message: m
	}
}

export function onCancel() {
	const event = new CustomEvent('cancel-file')
	document.dispatchEvent(event)
	return {
		type: actConstants.CANCEL
	}
}

export function checkAll() {
	return {
		type: actConstants.CHECK_ALL,
	}
}

export function uncheckAll() {
	return {
		type: actConstants.UNCHECK_ALL
	}
}

export function setRoot(path) {
	return dispatch => {
		dispatch({
			type: actConstants.SET_ROOT,
			path
		})
	}
}

export function setFileType(fileType) {
	return {
		type: actConstants.SET_FILE_TYPE,
		fileType: fileType
	}
}
