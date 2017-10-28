import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import generalReducer from './reducers/general-reducer'
import fileReducer from './reducers/file-reducer'
import App from './containers/App'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(
	combineReducers({ generalReducer, fileReducer }),
	applyMiddleware(logger, thunk)
)

export default class MediaSelector extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<App
					config={this.props.config}
					fileType={this.props.fileType}
					enableHeader={this.props.enableHeader}
					enableFooter={this.props.enableFooter}
				/>
			</Provider>
		)
	}
}