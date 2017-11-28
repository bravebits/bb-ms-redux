import React, { Component } from 'react'
import css from '../styles/index.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import _ from 'underscore'
import * as libs from '../libs/libs'

/**
 * Partially use redux, 
 * with files and api, we GET (modify store) them from store, use redux
 * with {isExpanded} and {children}, those 2 variables does not affect store, do not use redux
 */
class TreeNode extends Component {
	constructor(...args) {
		super(...args)
		this.state = {
			isExpanded: false
		}
	}

	fetchTreeNodeFiles = () => {
		return new Promise((resolve, reject) => {
			this.props.expandTreeNode(
				this.props.path,
				this.props.config.getAllFiles,
				resolve,
				reject
			)
		})
	}

	browseFiles = () => {
		const path = this.props.path ? this.props.path : '/'
		this.props.fetchFiles(path, this.props.config.getAllFiles)
		this.props.setPathToLocal(path)
	}

	toggleTreeNode = e => {
		e.stopPropagation()
		if (!this.state.isExpanded) {
			this.fetchTreeNodeFiles().then(resolve => {
				this.setState({
					children: this.props.treeNodes,
					isExpanded: true
				})
			})
		} else {
			this.setState({ isExpanded: false })
		}
	}

	render() {
		if (this.state.isExpanded) {
			return (
				<div>
					<div
						className={`${css['tree-view__item']} ${this.props
							.path === this.props.currentPath
							? css['active']
							: ''}`}
					>
						<div className={`${css['detail']}`}>
							<i
								onClick={this.toggleTreeNode}
								className="fa fa-minus-square-o"
							/>
							<span
								onClick={this.browseFiles}
								className={`${css['marg-0']}`}
							>
								{' '}{this.props.name}
							</span>
						</div>
					</div>
					<div className={`${css['tree-view__sub-item']}`}>
						{_.map(this.state.children, child => {
							return (
								<TreeNode
									{...this.props}
									path={`${this.props.path}${child.name}/`}
									name={child.name}
									type={child.type}
									key={child.name}
								/>
							)
						})}
					</div>
				</div>
			)
		} else {
			return (
				<div
					className={`${css['tree-view__item']} ${this.props.path ===
					this.props.currentPath
						? css['active']
						: ''}`}
					key={this.props.name}
				>
					{this.props.type === 'dir'
						? <div className={`${css['detail']}`}>
								<i
									onClick={this.toggleTreeNode}
									className="fa fa-plus-square-o"
								/>
								<span
									onClick={this.browseFiles}
									className={`${css['marg-0']}`}
								>
									{' '}{this.props.name}
								</span>
							</div>
						: null}
				</div>
			)
		}
	}
}

function mapStateToProps(state) {
	return {
		treeNodes: state.fileReducer.treeNodes,
		config: state.generalReducer.config,
		currentPath: state.fileReducer.currentPath
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeNode)
