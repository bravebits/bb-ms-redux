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

const config = {
	baseURL: 'http://pb.box/dev/',
	getAllFiles: 'http://pb.box/dev/index.php?pb3ajax=1&task=getListFiles',
	getFullDirectory:
		'http://pb.box/dev/index.php?pb3ajax=1&task=getFullDirectory',
	uploadFile: 'http://pb.box/dev/index.php?pb3ajax=1&task=uploadFile',
	createFolder: 'http://pb.box/dev/index.php?pb3ajax=1&task=createFolder',
	deleteFolder: 'http://pb.box/dev/index.php?pb3ajax=1&task=deleteFolder',
	deleteFile: 'http://pb.box/dev/index.php?pb3ajax=1&task=deleteFile',
	renameFolder: 'http://pb.box/dev/index.php?pb3ajax=1&task=renameFolder',
	renameFile: 'http://pb.box/dev/index.php?pb3ajax=1&task=renameFile'
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
