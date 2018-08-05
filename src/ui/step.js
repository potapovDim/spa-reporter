import React, {Component} from 'react'
import {File} from './file'

export class Step extends Component {
  renderFiles = () => {
    const {attachments, title} = this.props
    return (<div>Step: {title}
      {attachments.length && attachments.map((file, index) => <File key={index} file={file} />)}
    </div>)
  }
  render() {
    return (
      <div>{this.renderFiles()}</div>
    )
  }
}