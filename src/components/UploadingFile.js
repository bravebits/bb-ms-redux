import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import css from '../styles/index.css'

class UploadingFile extends Component {
	constructor() {
    super()

    this.state = {
      uploadPercentage: '0%'
    }
  }

  componentDidMount() {
    const { currentPath, data } = this.props

    this.props.handleUploadFile(
      currentPath,
      data.uploading,
      data.name,
      (percentage) => this.setState({ uploadPercentage: percentage })
    )

    data.willSelect && this.props.selectFile(currentPath + data.name)
  }

  render() {
    return (
      <div
        className={`${css['list-media__item']} ${this.props.isBack
          ? css['back']
          : ''}`}
      >
        <div className={`${css['list-media__item__checkbox']}`}>
        </div>
        <div className={css['content']}>
          <div className={`${css['list-media__item__avatar']}`}>
            <div style={{
              margin: 'auto',
              height: '15px',
              width: '80%',
              backgroundColor: 'rgba(92,184,92,0.2)',
              borderRadius: '4px',
              border: '1px solid #5cb85c'
            }}>
              <div style={{
                height: '100%',
                width: this.state.uploadPercentage,
                backgroundColor: '#5cb85c',
                color: '#fff',
                fontSize: '12px',
                lineHeight: 'normal'
              }}>
                <span style={{}}>{this.state.uploadPercentage}</span>
              </div>
            </div>
          </div>
          <div className={`${css['list-media__item__title']}`}>
            <span>
              {this.props.data.name}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentPath: state.fileReducer.currentPath
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadingFile)
