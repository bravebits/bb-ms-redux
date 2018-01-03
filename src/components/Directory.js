import React, { Component } from 'react'
import css from '../styles/index.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import $ from 'jquery'
import * as libs from '../libs/libs'

class Directory extends Component {
	openFolder = e => {
		e.stopPropagation()
		const { data, currentPath } = this.props
		const path = `${currentPath + data.name}/`
		this.props.fetchFiles(path)
	}

	enableEditting = e => {
		e.stopPropagation()
		this.name.contentEditable = true
		this.setCaret(0, this.name)
	}

	setCaret = (pos, el) => {
		const range = document.createRange()
		const sel = window.getSelection()
		range.setStart(el.childNodes[0], pos)
		range.setEnd(el.childNodes[0], el.innerText.length)
		sel.removeAllRanges()
		sel.addRange(range)
		el.focus()
	}

	handleOnKeyDown = e => {
		if (e.keyCode === 13) {
			e.preventDefault()
			this.name.contentEditable = false
		}
	}

	deleteFolder = e => {
		e.stopPropagation()
		const path = this.props.currentPath + this.props.data.name
		this.props.deleteFolder(
			path,
			this.props.currentPath
		)
	}

	selectMultiFile = e => {
		e.stopPropagation()
		const path = this.props.currentPath + this.props.data.name
		if (e.target.checked) {
			this.props.selectMultiFileAdd(path)
		} else {
			this.props.selectMultiFileRemove(path)
		}
	}

	handleBlur = e => {
		this.name.contentEditable = false
		this.props.renameFolder(
			this.props.currentPath + this.props.data.name,
			this.props.currentPath + e.target.innerText,
			this.props.currentPath
		)
		this.props.resetFolderName(this.name, this.props.data.name)
	}

	render() {
		const { selectedFile, selectedFiles } = this.props
		const path = this.props.currentPath + this.props.data.name
		const isSelected = path === selectedFile
		const isMultiSelected =
			selectedFiles && selectedFiles.indexOf(path) >= 0
		return (
			<div
				className={`${css['list-media__item']} ${this.props.isBack
					? css['back']
					: ''}`}
			>
				<div
					className={`${css['content']} ${isSelected ||
					isMultiSelected
						? css['active']
						: ''}`}
				>
					<div className={`${css['list-media__item__checkbox']}`}>
						<div className={`${css['css-checkbox']}`}>
							<input
								onClick={this.selectMultiFile}
								id="option"
								type="checkbox"
								name="field"
								value="option"
								checked={isMultiSelected ? true : false}
							/>
							<label htmlFor="option">
								<span>
									<span />
								</span>
							</label>
						</div>
					</div>
					<div className={`${css['list-media__item__avatar']} ${css['list-media__item__folder']}`}
						onClick={this.openFolder}>
						<span>
							<i className="fa fa-folder-o"></i>
						</span>
					</div>
					<div className={`${css['list-media__item__title']}`}>
						<span
							ref={r => (this.name = r)}
							onDoubleClick={this.enableEditting}
							onKeyDown={this.handleOnKeyDown}
							onBlur={this.handleBlur}
						>
							{this.props.data.name}
						</span>
					</div>
					<div className={`${css['list-media__item__dimensions']}`} />
					<div className={`${css['list-media__item__file-size']}`} />
					<div className={`${css['list-media__item__remove']}`}>
						<a href="#" onClick={this.deleteFolder}>
							<i className="fa fa-trash-o"></i>
						</a>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		currentPath: state.fileReducer.currentPath,
		selectedFile: state.fileReducer.selectedFile,
		selectedFiles: state.fileReducer.selectedFiles
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Directory)
