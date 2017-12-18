import React, { Component } from 'react'
import css from '../styles/index.css'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'underscore'
import globalVars from '../libs/globalVariables'

class Footer extends Component {

	onCancel = () => {
		this.props.onCancel()
	}

	chooseFile = () => {
		this.props.chooseFile(this.props.selectedFile)
	}

	render() {
		const { selectedFile } = this.props

		if(!globalVars.get('enableFooter')) {
			return null
		}

		return (
			<div
				className={`${css['box__footer']} ${css['border-top']} ${css[
					'flex'
				]} ${css['center']}`}
			>
				<div
					className={`${css['text-align--right']}`}
					style={{ width: '100%' }}
				>
					{_.isEmpty(selectedFile) ? (
						<button
							className={`${css['btn']} jsn-btn jsn-btn-primary jsn-btn-sm`}
							disabled
						>
							Select
						</button>
					) : (
						<button
							onClick={this.chooseFile}
							className={`${css['btn']} jsn-btn jsn-btn-primary jsn-btn-sm ${css['active']}`}
						>
							Select
						</button>
					)}
					<button
						onClick={this.onCancel}
						className={`${css['btn']} jsn-btn jsn-btn-outline-secondary jsn-btn-sm`}
					>
						Cancel
					</button>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		selectedFile: state.fileReducer.selectedFile
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
