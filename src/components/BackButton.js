import React, { Component } from 'react'
import css from '../styles/index.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

class BackButton extends Component {
	goBack = () => {
		const { currentPath } = this.props
		const paths = currentPath.split('/')
		const path = currentPath.replace(`${paths[paths.length - 2]}/`, '')
		this.props.fetchFiles(path)
	}

	render() {
		const { currentPath, root } = this.props
		return currentPath !== root
			? <div
					onClick={this.goBack}
					className={`${css['list-media__item']} ${css['back-button']}`}
				>
					<div className={`${css['content']}`}>
						<div className={`${css['list-media__item__checkbox']}`} />
						<div className={`${css['list-media__item__avatar']} ${css['list-media__item__back']}`}>
							<i className="fa fa-angle-left" />
						</div>
						<div className={`${css['list-media__item__title']}`}>
							<span>Back</span>
						</div>
						<div
							className={`${css['list-media__item__dimensions']}`}
						/>
						<div
							className={`${css['list-media__item__file-size']}`}
						/>
						<div className={`${css['list-media__item__remove']}`} />
					</div>
				</div>
			: null
	}
}
function mapStateToProps(state) {
	return {
		currentPath: state.fileReducer.currentPath,
		root: state.fileReducer.root
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BackButton)
