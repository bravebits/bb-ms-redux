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

const params='option=com_ajax&plugin=pagebuilder3&format=json'

const config = {
	baseURL: 'http://pb.box/dev/',
	getAllFiles: `http://pb.box/dev/index.php?${params}&task=getListFiles`,
	getFullDirectory:
		`http://pb.box/dev/index.php?${params}&task=getFullDirectory`,
	uploadFile: `http://pb.box/dev/index.php?${params}&task=uploadFile`,
	createFolder: `http://pb.box/dev/index.php?${params}&task=createFolder`,
	deleteFolder: `http://pb.box/dev/index.php?${params}&task=deleteFolder`,
	deleteFile: `http://pb.box/dev/index.php?${params}&task=deleteFile`,
	renameFolder: `http://pb.box/dev/index.php?${params}&task=renameFolder`,
	renameFile: `http://pb.box/dev/index.php?${params}&task=renameFile`
}

render(
	<Provider store={store}>
		<App
			config={config}
			fileType={'TYPE_FILE'}
			enableHeader={false}
			enableFooter={false}
		/>
	</Provider>,
	document.getElementById('root')
)
