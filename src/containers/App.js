import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import css from '../styles/index.css'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Toast from '../components/Toast'
import * as libs from '../libs/libs'

class App extends Component {
	componentWillMount() {
		this.initApp().then(() => {
			this.fetchFiles()
		})
	}

	initApp() {
		return new Promise((resolve, reject) => {
			this.props.init(
				this.props.config,
				this.props.fileType,
				this.props.enableHeader,
				this.props.enableFooter
			)
			resolve()
		})
	}

	fetchFiles() {
		this.props.getPathFromLocal()
		return new Promise(resolve => {
			const dirs = this.props.localPath.split('/').slice(0, -1)
			let path = ''
			_.each(dirs, dir => {
				path += dir + '/'
				this.props.getAllFiles(path, this.props.config.getAllFiles)
			})
			this.props.setCurrentPath(this.props.localPath)
		})
	}

	render() {
		const { isSidebarHidden } = this.props
		return (
			<div className={`${css['wrapper']}`}>
				<div className={`${css['media-selector']}`}>
					<div
						className={`${css['box']} ${css[
							'relative'
						]} ${isSidebarHidden ? css['hide-tree-folder'] : ''}`}
					>
						<Header />
						<Content />
						<Footer />
						<Toast />
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		files: state.fileReducer.files,
		isSidebarHidden: state.generalReducer.isSidebarHidden,
		localPath: state.generalReducer.localPath
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
