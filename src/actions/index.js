import * as joomlaApi from '../api/joomla'
import * as actConstants from '../constants/actions'
import _ from 'underscore'
import * as generalConstants from '../constants/general'
import * as libs from '../libs/libs'

export function getAllFiles(p, f) {
	return {
		type: actConstants.GET_ALL_FILES,
		path: p,
		files: f
	}
}

export function init(c, ft, eH, eF) {
	return {
		type: actConstants.INIT,
		config: c,
		fileType: ft,
		enableHeader: eH,
		enableFooter: eF
	}
}

export const fetchFiles = (path, endPoint) => {
	return dispatch => {
		joomlaApi.getAllFiles(path, endPoint).done(res => {
			dispatch(getAllFiles(path, JSON.parse(res)))
			dispatch(expandTreeNode(path, endPoint, () => {}, () => {}))
		})
	}
}

export function expandTreeNodeSuccess(t) {
	return {
		type: actConstants.EXPAND_TREE_NODE_SUCCESS,
		treeNodes: t
	}
}

export function expandTreeNode(path, endPoint, resolve, reject) {
	return function(dispatch) {
		joomlaApi.getAllFiles(path, endPoint).done(res => {
			dispatch(expandTreeNodeSuccess(JSON.parse(res)))
			resolve(JSON.parse(res))
		})
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

export function searchInFolder(k) {
	return {
		type: actConstants.SEARCH_IN_FOLDER,
		keyWord: k
	}
}

export function clearSearchResults() {
	return {
		type: actConstants.CLEAR_SEARCH_RESULTS
	}
}

export function onUploadSuccess(f) {
	return {
		type: actConstants.UPLOAD_SUCCESS,
		file: f
	}
}
// todo: improve this and add multi upload
export function handleUploadFile(path, endPoint, file, endPointFetchFiles) {
	return function(dispatch) {
		joomlaApi.handleUploadFile(path, endPoint, file).then(res => {
			console.log(res)
			if (res && res.message === 'done') {
				dispatch(fetchFiles(path, endPointFetchFiles))
				// get the info of the latest upload file
				// normal case, if there's only one unique file uploaded, we just need to filter and get info by its name
				// but if there are duplicated files like: image.png and image(1).png, (1) here is added by server
				// we need to find the filename because it is not the {file.name}
				// const fileNameNoExt = file.name.replace(/\..*$/, '')
				// const lastVal = _.chain(res.list)
				// 	.filter(item => {
				// 		return item.name.indexOf(fileNameNoExt) >= 0
				// 	})
				// 	.map(item => {
				// 		const newVal = item.name
				// 			.replace(fileNameNoExt, '')
				// 			.replace(/\..*$/, '')
				// 		if (_.isEmpty(newVal)) {
				// 			return 0
				// 		} else {
				// 			const numVal = newVal
				// 				.replace('(', '')
				// 				.replace(')', '')
				// 			return parseInt(numVal, 10)
				// 		}
				// 	})
				// 	.sortBy(num => {
				// 		return num
				// 	})
				// 	.last()
				// 	.value()
				// const extWithoutDot = file.name.replace(/^.*\./, '')
				// const fileName = `${fileNameNoExt}(${lastVal}).${extWithoutDot}`
				// //=========//
				// const fileInfo = _.filter(res.list, item => {
				// 	return item.name === fileName
				// })[0]
				// // got it {fileInfo}
				// dispatch(onUploadSuccess(fileInfo))
				dispatch(
					addMessage({
						type: generalConstants.TOAST_SUCCESS,
						content: 'Upload successfully.',
						duration: 1000
					})
				)
			} else {
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
	const absolutePath = generalConstants.ROOT_FOLDER + p
	const event = new CustomEvent('choose-file', { detail: absolutePath })
	document.dispatchEvent(event)
	return {
		type: actConstants.CHOOSE_FILE,
		path: p
	}
}

export function selectFile(p) {
	const absolutePath = generalConstants.ROOT_FOLDER + p
	const event = new CustomEvent('select-file', { detail: absolutePath })
	document.dispatchEvent(event)
	return {
		type: actConstants.SELECT_FILE,
		path: p
	}
}

export function onDeleteFileSuccess(fn) {
	return {
		type: actConstants.DELETE_FILE_SUCCESS,
		fileName: fn
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
		folderName: fn
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

export function checkAll(cp, fs, ft) {
	return {
		type: actConstants.CHECK_ALL,
		currentPath: cp,
		files: fs,
		fileType: ft
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
