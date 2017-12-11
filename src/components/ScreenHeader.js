import React, { Component } from 'react'
import css from '../styles/index.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import * as generalConstants from '../constants/general'
import * as libs from '../libs/libs'
import _ from 'underscore'

class ScreenHeader extends Component {
	toggleCheckAll = e => {
		e.stopPropagation()
		const isAllChecked = e.target.checked
		if (isAllChecked) {
			this.props.checkAll()
		} else {
			this.props.uncheckAll()
		}
	}

	render() {
		return (
			<div className={`${css['list-media__item']} ${css['head']}`}>
				<div className={`${css['content']}`}>
					<div className={`${css['list-media__item__checkbox']} ${css['css-checkbox']}`}>
						<label>
							<input
								type="checkbox"
								onClick={this.toggleCheckAll}
								checked={
									this.props.selectedFiles.length !== 0 &&
									this.props.selectedFiles.length ===
										this.props.files.length
								}
							/>
						</label>
					</div>
					<div className={`${css['list-media__item__avatar']}`}>
						<span>Name</span>
					</div>
					<div className={`${css['list-media__item__title']}`} />
					<div className={`${css['list-media__item__dimensions']}`}>
						<span>Dimensions (px)</span>
					</div>
					<div className={`${css['list-media__item__file-size']}`}>
						<span>File size (KB)</span>
					</div>
					<div className={`${css['list-media__item__remove']}`}>
						<span>Delete</span>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		selectedFiles: state.fileReducer.selectedFiles,
		files: libs.getNodeByPath(state.fileReducer.treeNodes, state.fileReducer.currentPath).children,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenHeader)
