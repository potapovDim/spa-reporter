import React, {Component} from 'react'
import {File} from './file'

export class Step extends Component {
  state = {showAttachments: false}
  showHideAttachments = () => {this.setState({showAttachments: !this.state.showAttachments})}
  render() {
    const {showAttachments} = this.state
    const {attachments, title} = this.props
    const renderFiles = () => {
      return showAttachments && attachments.length ? attachments.map((file, index) => <File key={index} file={file} />) : null
    }
    return (
      <div>
        <div onClick={this.showHideAttachments}>Step:{title}</div>
        {renderFiles()}
      </div >
    )
  }
}