import React, { Component } from 'react'
import css from '../styles/index.css'
import SideBar from './SideBar'
import NavBar from './NavBar'
import MainScreen from './MainScreen'
import HideSidebarButton from './HideSidebarButton'

export default class Content extends Component {
	render() {
		return (
			<div className={`${css['box__content']} ${css['relative']}`}>
				<div style={{height: '100%', overflow: 'hidden', maxHeight: '100%'}} className={`${css['flex']}`}>
					<SideBar />
					<div className={`${css['flex5']} ${css['box-content-inner']}`}>
						<NavBar />
						<MainScreen />
					</div>
				</div>
				<HideSidebarButton />
			</div>
		)
	}
}
