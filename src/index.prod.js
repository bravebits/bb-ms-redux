import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import generalReducer from './reducers/general-reducer'
import fileReducer from './reducers/file-reducer'
import App from './containers/App'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(
	combineReducers({ generalReducer, fileReducer }),
	applyMiddleware(thunk)
)

export default class MediaSelector extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<App
					folder={this.props.folder}
					config={this.props.config}
					enableHeader={this.props.enableHeader}
					enableFooter={this.props.enableFooter}
				/>
			</Provider>
		)
	}
}

module.exports = MediaSelector
