import * as joomlaApi from '../api/joomla'
import * as actConstants from '../constants/actions'
import _ from 'underscore'
import * as generalConstants from '../constants/general'
import * as libs from '../libs/libs'

export function init(options) {
	const { config, fileType, enableHeader, enableFooter } = options
	const { root, path, selected, type } = options

	return dispatch => {
		dispatch({
			type: actConstants.INIT,
			config, fileType, enableHeader, enableFooter
		})
		type && dispatch(setFileType(type))

		_.reduce(path.split('/').slice(0, -1), (path, dir) => {
			path += dir + '/'
			dispatch(getAllFiles(path, config.getAllFiles))
			selected && dispatch(expandTreeNode(path))
			return path
		}, '')

		root &&	dispatch(setRoot(root))
		dispatch(setCurrentPath(path))
		dispatch(selectFile(selected))
	}
}

export function getAllFiles(path, endPoint) {
	return (dispatch, getState) => {
		const { fileType } = getState().fileReducer

		joomlaApi.getAllFiles(path, endPoint, fileType).done(res => {
			dispatch({
				type:actConstants.GET_ALL_FILES,
				path,
				files: JSON.parse(res)
			})
		})
	}
}

export function setCurrentPath(path) {
	return {
		type: actConstants.SET_CURRENT_PATH,
		path
	}
}

export function fetchFiles(path, endPoint) {
	return dispatch => {
		dispatch(getAllFiles(path, endPoint))
		dispatch(setCurrentPath(path))
	}
}

export function expandTreeNode(path) {
	return {
		type: actConstants.EXPAND_TREE_NODE,
		path: path
	}
}

export function checkAndExpand(path, endPoint) {
	return (dispatch, getState) => {
		const { treeNodes } = getState().fileReducer
		if (libs.getNodeByPath(treeNodes, path).children === undefined) {
			dispatch(getAllFiles(path, endPoint))
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
	return {
		type: actConstants.UPDATE_SEARCH_STRING,
		keyWord: k
	}
}

export function addUploadingFile(files, file, willSelect) {
	// Check file upload name
	// In case there are some files with the same name with upload file, we need to add some index to upload file
	// For example: image.jpg, image(1).jpg, image(2).jpg, etc.
	const splitExtension = (name) => {
		const pos = name.lastIndexOf('.')
		return pos !== -1 ? [name.substr(0, pos), name.substr(pos)] : [name, '']
	}
	const [fileName, fileExt] = splitExtension(file.name)
	const lastIndex = _.reduce(files, (result, f) => {
		if (f.type !== 'file') return result
		const [fName, fExt] = splitExtension(f.name)
		if (fileExt != fExt || fName.substr(0, fileName.length) !== fileName)
			return result
		const suffix = fName.substr(fileName.length)
		const index = suffix === ''? 0 : parseInt(suffix.slice(1, -1))
		return Math.max(result, index)
	}, -1)
	const newFileName = lastIndex === -1? file.name : `${fileName}(${lastIndex + 1})${fileExt}`
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

// todo: improve this and add multi upload
export function handleUploadFile(path, endPoint, file, fileName, onProcess) {
	return function(dispatch) {
		joomlaApi.handleUploadFile(path, endPoint, file, fileName, onProcess).then(res => {
			if (res && res.message === 'done') {
				const uploadedFile = _.find(res.list, item => {
					return item.name === fileName
				})
				delete uploadedFile.key
				dispatch(onUploadSuccess(uploadedFile))
				dispatch(
					addMessage({
						type: generalConstants.TOAST_SUCCESS,
						content: 'Upload successfully.',
						duration: 1000
					})
				)
			} else {
				dispatch(onDeleteFileSuccess(fileName))
				dispatch(
					addMessage({
						type: generalConstants.TOAST_ERROR,
						content:
							'File is not uploaded, please recheck the file type.',
						duration: 1000
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
export function createFolder(path, endPoint, files) {
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
		joomlaApi.createFolder(endPoint, path, name).done(res => {
			const result = JSON.parse(res)
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
						duration: 1000
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

export function renameFolder(endPoint, path, newPath, currentPath) {
	return function(dispatch) {
		if (path !== newPath) {
			const oldName = path.replace(currentPath, '')
			const newName = newPath.replace(currentPath, '')
			joomlaApi.renameFolder(endPoint, path, newPath).done(res => {
				const result = JSON.parse(res)
				if (result.success) {
					dispatch(onRenameFolderSuccess(oldName, newName))
					dispatch(
						addMessage({
							type: generalConstants.TOAST_SUCCESS,
							content: 'Rename folder successfully.',
							duration: 1000
						})
					)
				} else {
					dispatch(
						addMessage({
							type: generalConstants.TOAST_ERROR,
							content:
								'Rename folder failed, please check it again.',
							duration: 1000
						})
					)
				}
			})
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

export function renameFile(endPoint, path, newPath, currentPath) {
	return function(dispatch) {
		if (path !== newPath) {
			const oldName = path.replace(currentPath, '')
			const newName = newPath.replace(currentPath, '')
			joomlaApi.renameFile(endPoint, path, newPath).done(res => {
				const result = JSON.parse(res)
				if (result.success) {
					dispatch(onRenameFileSuccess(oldName, newName))
					dispatch(
						addMessage({
							type: generalConstants.TOAST_SUCCESS,
							content: 'Rename file successfully.',
							duration: 1000
						})
					)
				} else {
					dispatch(
						addMessage({
							type: generalConstants.TOAST_ERROR,
							content: 'Rename file failed, please check again.',
							duration: 1000
						})
					)
				}
			})
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

export function onDeleteFileSuccess(fn) {
	return {
		type: actConstants.DELETE_FILE_SUCCESS,
		name: fn
	}
}

export function deleteFile(path, endPoint, currentPath, mode) {
	return function(dispatch) {
		const fileName = path.replace(currentPath, '')
		if (mode === 'multi') {
			joomlaApi.deleteFile(endPoint, path).done(res => {
				const result = JSON.parse(res)
				if (result.success) {
					dispatch(onDeleteFileSuccess(fileName))
				}
			})
		} else {
			const cResult = confirm('Are you sure you want to delete?')
			if (cResult) {
				joomlaApi.deleteFile(endPoint, path).done(res => {
					const result = JSON.parse(res)
					if (result.success) {
						dispatch(onDeleteFileSuccess(fileName))
						dispatch(
							addMessage({
								type: generalConstants.TOAST_SUCCESS,
								content: 'Delete successfully.',
								duration: 1000
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

export function deleteFolder(path, endPoint, currentPath, mode) {
	return function(dispatch) {
		const folderName = path.replace(currentPath, '')
		if (mode === 'multi') {
			joomlaApi.deleteFolder(endPoint, path).done(res => {
				const result = JSON.parse(res)
				if (result.success) {
					dispatch(onDeleteFolderSuccess(folderName))
				}
			})
		} else {
			const cResult = confirm('Are you sure you want to delete?')
			if (cResult) {
				joomlaApi.deleteFolder(endPoint, path).done(res => {
					const result = JSON.parse(res)
					if (result.success) {
						dispatch(onDeleteFolderSuccess(folderName))
						dispatch(
							addMessage({
								type: generalConstants.TOAST_SUCCESS,
								content: 'Delete folder successfully.',
								duration: 1000
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
	endPointDeleteFile,
	endPoindDeleteFolder,
	currentPath,
	fileType
) {
	return function(dispatch) {
		const cResult = confirm('Are you sure you want to delete?')
		if (cResult) {
			for (let i = 0; i < files.length; i++) {
				if (files[i].match(/\./)) {
					if (fileType === generalConstants.TYPE_FILE) {
						dispatch(
							deleteFile(
								files[i],
								endPointDeleteFile,
								currentPath,
								'multi'
							)
						)
					} else {
						if (libs.isMedia(files[i])) {
							dispatch(
								deleteFile(
									files[i],
									endPointDeleteFile,
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
							endPoindDeleteFolder,
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
					duration: 1000
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

export function setPathToLocal(path) {
	libs.setPathToLocal(path)
	return {
		type: actConstants.SET_PATH_TO_LOCAL,
		localPath: path
	}
}

export function getPathFromLocal() {
	const path = libs.getPathFromLocal()
	return {
		type: actConstants.GET_PATH_FROM_LOCAL,
		localPath: path
	}
}

export function resetFileName(el, name) {
	el.innerText = name
	return {
		type: actConstants.RESET_FILE_NAME
	}
}

export function resetFolderName(el, name) {
	el.innerText = name
	return {
		type: actConstants.RESET_FILE_NAME
	}
}

export function setRoot(path) {
	return {
		type: actConstants.SET_ROOT,
		path
	}
}

export function setFileType(fileType) {
	return {
		type: actConstants.SET_FILE_TYPE,
		fileType: fileType
	}
}
