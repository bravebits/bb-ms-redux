import React, { Component } from 'react'
import css from '../styles/index.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

class HideSidebarButton extends Component {
	render() {
		const { toggleSidebar } = this.props
		return (
			<div className={`${css['btn-hide-tree-folder']}`}>
				<a onClick={toggleSidebar}>
					<span><i className="fa fa-arrow-left"></i></span>
					{/* <span>Hide</span> */}
				</a>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		isSidebarHidden: state.generalReducer.isSidebarHidden
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HideSidebarButton)
