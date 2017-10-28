import * as actConstants from '../constants/actions'
import _ from 'underscore'
import * as generalConstants from '../constants/general'
import * as libs from '../libs/libs'

const defaultState = {
	selectedFile: '',
	selectedFiles: [],
	chosenFile: '',
	treeNodes: [],
	files: [],
	currentPath: '/',
	searchResults: []
}

export default function(state = defaultState, action) {
	// it is very important to clone the object || array
	// otherwise the prevState will be equal with nextState => not update
	const newState = Object.assign({}, state)
	const cloneSelectedFiles = state.selectedFiles.slice(0)
	const cloneFiles = state.files.slice(0)
	// ============== //
	newState.selectedFile = null
	switch (action.type) {
		case actConstants.GET_ALL_FILES:
			newState.files = action.files
			newState.currentPath = action.path
			newState.searchResults = []
			newState.selectedFiles = []
			return newState
		case actConstants.EXPAND_TREE_NODE_SUCCESS:
			newState.treeNodes = action.treeNodes
			return newState
		case actConstants.SEARCH_IN_FOLDER:
			newState.searchResults = _.filter(state.files, file => {
				return file.name.indexOf(action.keyWord) >= 0
			})
			newState.selectedFiles = []
			return newState
		case actConstants.CLEAR_SEARCH_RESULTS:
			newState.searchResults = []
			newState.selectedFiles = []
			return newState
		case actConstants.CHOOSE_FILE:
			newState.chosenFile = action.path
			newState.selectedFiles = []
			return newState
		case actConstants.SELECT_FILE:
			newState.selectedFile = action.path
			newState.selectedFiles = []
			return newState
		case actConstants.SELECT_MULTI_FILE_ADD:
			cloneSelectedFiles.push(action.path)
			newState.selectedFiles = cloneSelectedFiles
			return newState
		case actConstants.SELECT_MULTI_FILE_REMOVE:
			cloneSelectedFiles.splice(
				cloneSelectedFiles.indexOf(action.path),
				1
			)
			newState.selectedFiles = cloneSelectedFiles
			return newState
		case actConstants.DELETE_FILES_SUCCESS:
			newState.selectedFiles = []
			return newState
		case actConstants.CHECK_ALL:
			newState.selectedFiles = _.map(action.files, child => {
				return action.currentPath + child.name
			})
			return newState
		case actConstants.UNCHECK_ALL:
			cloneSelectedFiles.length = 0
			newState.selectedFiles = cloneSelectedFiles
			return newState
		case actConstants.CREATE_FOLDER_SUCCESS:
		case actConstants.UPLOAD_SUCCESS:
			cloneFiles.push(action.file)
			newState.files = cloneFiles
			return newState
		case actConstants.RENAME_FOLDER_SUCCESS:
			_.each(cloneFiles, folder => {
				if (folder.name === action.oldName) {
					folder.name = action.newName
				}
			})
			newState.files = cloneFiles
			return newState
		case actConstants.RENAME_FILE_SUCCESS:
			_.each(cloneFiles, file => {
				if (file.name === action.oldName) {
					file.name = action.newName
				}
			})
			newState.files = cloneFiles
			return newState
		case actConstants.DELETE_FILE_SUCCESS:
			newState.files = _.filter(cloneFiles, file => {
				return file.name !== action.fileName
			})
			return newState
		case actConstants.DELETE_FOLDER_SUCCESS:
			newState.files = _.filter(cloneFiles, folder => {
				return folder.name !== action.folderName
			})
			return newState
		default:
			return newState
	}
}
