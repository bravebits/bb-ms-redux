import * as actConstants from '../constants/actions'
import _ from 'underscore'
import * as generalConstants from '../constants/general'
import * as libs from '../libs/libs'
import { extend } from 'jquery'

const defaultState = {
	selectedFile: null,
	selectedFiles: [],
	chosenFile: null,
	treeNodes: {
		isExpanded: true,
		name: '/',
		type: 'dir'
	},
	root: '/',
	currentPath: '',
	searchString: '',
	fileType: ''
}

export default function(state = defaultState, action) {
	// it is very important to clone the object || array
	// otherwise the prevState will be equal with nextState => not update
	const newState = Object.assign({}, state)
	const cloneTreeNodes = extend(true, {}, state.treeNodes)
	const cloneSelectedFiles = state.selectedFiles.slice(0)
	// ============== //
	let node
	switch (action.type) {
		case actConstants.GET_ALL_FILES:
			node = libs.getNodeByPath(cloneTreeNodes, action.path)
			libs.setNodeChildren(node, action.files)
			newState.treeNodes = cloneTreeNodes
			return newState
		case actConstants.SET_CURRENT_PATH:
			newState.currentPath = action.path
			newState.selectedFiles = []
			newState.selectedFile = null
			newState.searchString = ''
			return newState
		case actConstants.EXPAND_TREE_NODE:
			libs.getNodeByPath(cloneTreeNodes, action.path).isExpanded = true
			newState.treeNodes = cloneTreeNodes
			return newState
		case actConstants.COLLAPSE_TREE_NODE:
			libs.getNodeByPath(cloneTreeNodes, action.path).isExpanded = false
			newState.treeNodes = cloneTreeNodes
			return newState
		case actConstants.UPDATE_SEARCH_STRING:
			newState.searchString = action.keyWord
			newState.selectedFiles = []
			newState.selectedFile = null
			return newState
		case actConstants.CHOOSE_FILE:
			newState.chosenFile = action.path
			newState.selectedFiles = []
			newState.selectedFile = null
			return newState
		case actConstants.SELECT_FILE:
			newState.selectedFile = action.path
			newState.selectedFiles = []
			return newState
		case actConstants.SELECT_MULTI_FILE_ADD:
			cloneSelectedFiles.push(action.path)
			newState.selectedFiles = cloneSelectedFiles
			newState.selectedFile = null
			return newState
		case actConstants.SELECT_MULTI_FILE_REMOVE:
			newState.selectedFiles = _.filter(state.selectedFiles, file =>
				file !== action.path
			)
			return newState
		case actConstants.DELETE_FILES_SUCCESS:
			newState.selectedFiles = []
			return newState
		case actConstants.CHECK_ALL:
			const files = libs.getNodeByPath(cloneTreeNodes, state.currentPath).children
			newState.selectedFiles = _.map(files, file => state.currentPath + file.name)
			return newState
		case actConstants.UNCHECK_ALL:
			cloneSelectedFiles.length = 0
			newState.selectedFiles = cloneSelectedFiles
			return newState
		case actConstants.ADD_UPLOADING_FILE:
			libs.getNodeByPath(cloneTreeNodes, state.currentPath).children.push({
				name: action.name,
				type: 'file',
				uploading: action.file
			})
			newState.treeNodes = cloneTreeNodes
			return newState
		case actConstants.UPLOAD_SUCCESS:
			node = libs.getNodeByPath(cloneTreeNodes, state.currentPath)
			node.children = _.map(node.children, file => {
				if (file.name === action.file.name) return action.file
				return file
			})
			newState.treeNodes = cloneTreeNodes
			return newState
		case actConstants.CREATE_FOLDER_SUCCESS:
			libs.getNodeByPath(cloneTreeNodes, state.currentPath).children.push(action.file)
			newState.treeNodes = cloneTreeNodes
			return newState
		case actConstants.RENAME_FOLDER_SUCCESS:
		case actConstants.RENAME_FILE_SUCCESS:
			_.each(libs.getNodeByPath(cloneTreeNodes, state.currentPath).children, file => {
				if (file.name === action.oldName) {
					file.name = action.newName
				}
			})
			newState.treeNodes = cloneTreeNodes
			return newState
		case actConstants.DELETE_FOLDER_SUCCESS:
		case actConstants.DELETE_FILE_SUCCESS:
			node = libs.getNodeByPath(cloneTreeNodes, state.currentPath)
			node.children = _.filter(node.children, file => {
				return file.name !== action.name
			})
			newState.treeNodes = cloneTreeNodes
			return newState
		case actConstants.SET_ROOT:
			newState.root = action.path
			return newState
		case actConstants.SET_FILE_TYPE:
			newState.fileType = action.fileType
			return newState
		default:
			return state
	}
}
