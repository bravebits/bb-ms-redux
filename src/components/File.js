import React, { Component } from 'react'
import css from '../styles/index.css'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import * as libs from '../libs/libs'
import * as generalConstants from '../constants/general'
import $ from 'jquery'

class File extends Component {
	enableEditting = e => {
		e.stopPropagation()
		this.name.contentEditable = true
		this.setCaret(0, this.name)
	}

	setCaret = (pos, el) => {
		const range = document.createRange()
		const sel = window.getSelection()
		range.setStart(el.childNodes[0], pos)
		range.setEnd(el.childNodes[0], el.innerText.indexOf('.'))
		sel.removeAllRanges()
		sel.addRange(range)
		el.focus()
	}

	deleteFile = e => {
		e.stopPropagation()
		const path = this.props.currentPath + this.props.data.name
		this.props.deleteFile(
			path,
			this.props.config.deleteFile,
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

	handleOnKeyDown = e => {
		if (e.keyCode === 13) {
			e.preventDefault()
			this.name.contentEditable = false
		}
	}

	chooseFile = e => {
		e.stopPropagation()
		const path = this.props.currentPath + this.props.data.name
		this.props.chooseFile(path)
	}

	selectFile = e => {
		e.stopPropagation()
		const path = this.props.currentPath + this.props.data.name
		this.props.selectFile(path)
	}

	handleBlur = e => {
		this.name.contentEditable = false
		this.props.renameFile(
			this.props.config.renameFile,
			this.props.currentPath + this.props.data.name,
			this.props.currentPath + e.target.innerText,
			this.props.currentPath
		)
		this.props.resetFileName(this.name, this.props.data.name)
	}

	render() {
		const { selectedFile, selectedFiles } = this.props
		const path = this.props.currentPath + this.props.data.name
		const isSelected = path === selectedFile
		const isMultiSelected =
			selectedFiles && selectedFiles.indexOf(path) >= 0
		return libs.isMedia(this.props.data.name) ? (
			<div
				onDoubleClick={this.chooseFile}
				onClick={this.selectFile}
				className={`${css['list-media__item']}  ${this.props.isBack
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
					<div className={`${css['list-media__item__avatar']}`}>
						<img
							src={`${this.props.baseURL}images${this.props
								.currentPath}${this.props.data.name}`}
						/>
					</div>
					<div className={`${css['list-media__item__title']}`}>
						<span
							ref={r => (this.name = r)}
							onBlur={this.handleBlur}
							onDoubleClick={this.enableEditting}
							onKeyDown={this.handleOnKeyDown}
						>
							{this.props.data.name}
						</span>
					</div>
					<div className={`${css['list-media__item__dimensions']}`}>
						{libs.isMedia(this.props.data.name) ? (
							<span>{`${this.props.data.image_width}x${this.props
								.data.image_height}`}</span>
						) : null}
					</div>
					<div className={`${css['list-media__item__file-size']}`}>
						<span>{this.props.data.file_size}</span>
					</div>
					<div className={`${css['list-media__item__remove']}`}>
						<a href="#" onClick={this.deleteFile}>
							<i className="fa fa-trash-o" />
						</a>
					</div>
				</div>
			</div>
		) : this.props.fileType === generalConstants.TYPE_FILE ? (
			<div
				onDoubleClick={this.chooseFile}
				onClick={this.selectFile}
				className={`${css['list-media__item']}  ${this.props.isBack
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
					<div className={`${css['list-media__item__avatar']}`}>
						<span className={`${css['file-type']}`}>
							{this.props.data.name.match(/\..*$/) ? (
								this.props.data.name
									.match(/\..*$/)[0]
									.toUpperCase()
							) : (
								generalConstants.UNKNOWN_FILE_TYPE
							)}
						</span>
					</div>
					<div className={`${css['list-media__item__title']}`}>
						<span
							ref={r => (this.name = r)}
							onDoubleClick={this.enableEditting}
							onKeyDown={this.handleOnKeyDown}
						>
							{this.props.data.name}
						</span>
					</div>
					<div className={`${css['list-media__item__dimensions']}`}>
						{libs.isMedia(this.props.data.name) ? (
							<span>{`${this.props.data.image_width}x${this.props
								.data.image_height}`}</span>
						) : null}
					</div>
					<div className={`${css['list-media__item__file-size']}`}>
						<span>{this.props.data.file_size}</span>
					</div>
					<div className={`${css['list-media__item__remove']}`}>
						<a href="#" onClick={this.deleteFile}>
							<i className="fa fa-trash-o" />
						</a>
					</div>
				</div>
			</div>
		) : null
	}
}

function mapStateToProps(state) {
	return {
		baseURL: state.generalReducer.config.baseURL,
		currentPath: state.fileReducer.currentPath,
		config: state.generalReducer.config,
		selectedFile: state.fileReducer.selectedFile,
		selectedFiles: state.fileReducer.selectedFiles,
		fileType: state.generalReducer.fileType
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(File)
