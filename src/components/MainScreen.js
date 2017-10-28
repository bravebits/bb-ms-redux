import React, { Component } from 'react'
import css from '../styles/index.css'
import File from './File'
import Directory from './Directory'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import _ from 'underscore'
import ScreenHeader from './ScreenHeader'
import PropTypes from 'prop-types'
import BackButton from './BackButton'
import * as libs from '../libs/libs'

class MainScreen extends Component {
	render() {
		const { files, viewType, searchResults } = this.props
		const displayItems = _.isEmpty(searchResults) ? files : searchResults
		return (
			<div
				className={`${css['box__content']} ${css['box__media']} ${css[
					'relative'
				]}`}
			>
				<div
					className={`${css['list-media']} ${libs.mapViewType(
						viewType
					)}`}
				>
					<div className={`${css['flex']}`}>
						<ScreenHeader />
						<BackButton />
						{_.map(displayItems, (item, ind) => {
							if (item.type === 'dir') {
								return (
									<Directory
										key={item.name}
										data={item}
										isBack={ind % 2 === 0}
									/>
								)
							} else {
								return (
									<File
										key={item.name}
										data={item}
										isBack={ind % 2 === 0}
									/>
								)
							}
						})}
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		files: state.fileReducer.files,
		viewType: state.generalReducer.viewType,
		searchResults: state.fileReducer.searchResults
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
