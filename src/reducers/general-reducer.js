import * as actConstants from '../constants/actions'
import * as _ from 'underscore'

const initialState = {
	config: {},
	isSidebarHidden: false,
	viewType: 'grid',
	messages: [],
	version: '1.0.0',
	localPath: '/'
}

export default function(state = initialState, action) {
	const newState = Object.assign({}, state)
	const messages = state.messages.slice(0)
	switch (action.type) {
		case actConstants.INIT:
			newState.config = action.config
			newState.fileType = action.fileType
			newState.enableHeader = action.enableHeader
			newState.enableFooter = action.enableFooter
			return newState
		case actConstants.CHANGE_VIEW_TYPE:
			newState.viewType = action.viewType
			return newState
		case actConstants.TOGGLE_SIDEBAR:
			newState.isSidebarHidden = !newState.isSidebarHidden
			return newState
		case actConstants.SHOW_MESSAGE:
			messages.push(action.message)
			newState.messages = messages
			return newState
		case actConstants.HIDE_MESSAGE:
			newState.messages = _.reject(messages, el => {
				return el.content === action.message.content
			})
			return newState
		case actConstants.GET_PATH_FROM_LOCAL:
			newState.localPath = action.localPath
			return newState
		default:
			return state
	}
}
