import React, { Component } from 'react'
import css from '../styles/index.css'
import File from './File'
import UploadingFile from './UploadingFile'
import Directory from './Directory'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import _ from 'underscore'
import ScreenHeader from './ScreenHeader'
import PropTypes from 'prop-types'
import BackButton from './BackButton'
import DropZone from './DropZone'
import * as libs from '../libs/libs'

class MainScreen extends Component {
	render() {
		const { treeNodes, viewType, searchString, currentPath } = this.props
		const files = libs.getNodeByPath(treeNodes, currentPath).children
		const displayItems = _.filter(files, file => libs.simpleMatch(file.name, searchString))
		return (
			<DropZone>
				<div
					className={`${css['list-media']} ${libs.mapViewType(
						viewType
					)}`}
				>
					<div className={`${css['flex']}`}>
						<ScreenHeader />
						<BackButton />
						{_.map(displayItems, (item, ind) => {
							if (item.type === 'dir') {
								return (
									<Directory
										key={item.name}
										data={item}
										isBack={ind % 2 === 0}
									/>
								)
							} else if (item.uploading) {
								return (
									<UploadingFile
										key={item.name}
										data={item}
										isBack={ind % 2 === 0}
									/>
								)
							} else {
								return (
									<File
										key={item.name}
										data={item}
										isBack={ind % 2 === 0}
									/>
								)
							}
						})}
					</div>
				</div>
			</DropZone>
		)
	}
}

function mapStateToProps(state) {
	return {
		treeNodes: state.fileReducer.treeNodes,
		viewType: state.generalReducer.viewType,
		searchString: state.fileReducer.searchString,
		currentPath: state.fileReducer.currentPath
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
