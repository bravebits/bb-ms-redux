import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import css from '../styles/index.css'
import * as libs from '../libs/libs'

class DropZone extends Component {
  static propTypes = {}
  static defaultProps = {}

  constructor() {
    super()

    this.state = {
      dragging: false
    }
  }

  handleDragEnter = (e) => {
    this.setState({dragging: true})
  }

  handleDragLeave = (e) => {
    if (e.target === this.overlay) this.setState({dragging: false})
  }

  handleDragOver = (e) => {
    e.preventDefault()
  }

  handleDrop = (e) => {
    e.preventDefault()
    const { config, currentPath } = this.props
    const uploadFiles = e.dataTransfer.files

    this.setState({dragging: false})
    this.props.handleUploadFiles(
      this.props.files,
      uploadFiles
    )
  }

  render() {
    return (
      <div
        className={`
          ${css['box__content']}
          ${css['box__media']}
          ${css['relative']}
        `}
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
      >
        {this.props.children}
        <div
          className={`
            ${css['overlay']}
            ${this.state.dragging? '' : css['overlay--hidden']}
          `}
          ref={ref => this.overlay = ref}
        >
          <span className={`${css['overlay__message']}`}>
            {'Drop files to upload them to folder: '}
            <b>
              {
                this.props.currentPath.split('/')
                .filter(folder => folder).pop() || '/root'
              }
            </b>
          </span>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
		config: state.generalReducer.config,
    currentPath: state.fileReducer.currentPath,
    files: libs.getNodeByPath(state.fileReducer.treeNodes, state.fileReducer.currentPath).children
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DropZone)
