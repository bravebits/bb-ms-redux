import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import generalReducer from './reducers/general-reducer'
import fileReducer from './reducers/file-reducer'
import App from './containers/App'
import thunk from 'redux-thunk'

const store = createStore(
	combineReducers({ generalReducer, fileReducer }),
	applyMiddleware(thunk)
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

module.exports = MediaSelector
