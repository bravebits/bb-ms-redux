import React, { Component } from 'react'
import css from '../styles/index.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import TreeNode from './TreeNode'

class SideBar extends Component {
	render() {
		const { isSidebarHidden, treeNodes } = this.props
		return (
			<div
				className={`${css['div-parent-tree-view']} ${isSidebarHidden
					? css['hide']
					: ''}`}
			>
				<div className={`${css['tree-view']}`}>
					<TreeNode
						path="/"
						{...treeNodes}
					/>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		isSidebarHidden: state.generalReducer.isSidebarHidden,
		treeNodes: state.fileReducer.treeNodes
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
