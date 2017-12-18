import * as actConstants from '../constants/actions'
import * as _ from 'underscore'

const initialState = {
	isSidebarHidden: false,
	viewType: 'grid',
	messages: []
}

export default function(state = initialState, action) {
	const newState = Object.assign({}, state)
	const messages = state.messages.slice(0)
	switch (action.type) {
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
		default:
			return state
	}
}
