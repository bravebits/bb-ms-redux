import React from 'react'
import css from '../styles/index.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import _ from 'underscore'
import * as constants from '../constants/general'

/**
 * USAGE: dispatch(addMessage({type: 'TOAST_NOTI', content: 'your message goes here', duration: 5000}))
 * type: 'TOAST_SUCCESS' || 'TOAST_ERROR' || 'TOAST_NOTI'
 * content: string
 * duration: number (millis)
 */
class Toast extends React.Component {
	render() {
		const { messages } = this.props
		return (
			<div>
				{_.map(messages, (message, ind) => {
					switch (message.type) {
						case constants.TOAST_ERROR:
							return (
								<div
									key={ind}
									className={`${css['tooltip']} ${css[
										'noti'
									]} ${css['error']}`}
								>
									<i className="fa fa-remove" />
									<span> {message.content} </span>
								</div>
							)
						case constants.TOAST_NOTI:
							return (
								<div
									key={ind}
									className={`${css['tooltip']} ${css[
										'noti'
									]} ${css['info']}`}
								>
									<i className="fa fa-info-circle" />
									<span> {message.content} </span>
								</div>
							)
						case constants.TOAST_SUCCESS:
							return (
								<div
									key={ind}
									className={`${css['tooltip']} ${css[
										'noti'
									]} ${css['success']}`}
								>
									<i className="fa fa-check" />
									<span>{message.content}</span>
								</div>
							)
					}
				})}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		messages: state.generalReducer.messages
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Toast)
