import React, { Component } from 'react'
import css from '../styles/index.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

class Header extends Component {
	render() {
		const { enableHeader } = this.props
		if (!enableHeader) {
			return null
		}
		return (
			<div
				className={`${css['box__header']} ${css['flex']} ${css[
					'center'
				]}`}
			>
				<div className={`${css['text-align--left']} ${css['flex1']}`}>
					<p className={`${css['box__header__title']}`}>
						Select Image
					</p>
				</div>
				<div className={`${css['text-align--right']} ${css['flex1']}`}>
					<a href="#" onClick={this.props.onCancel}>
						<i className="fa fa-close"></i>
					</a>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		enableHeader: state.generalReducer.enableHeader
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)