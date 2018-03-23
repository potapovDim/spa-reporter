import React, { Component } from 'react'
import { File } from './file'
export class Step extends Component {
  renderFiles = () => {
    const { files } = this.props
    return files.length && files.map((file, index) => <File key={index} file={file} />)
  }
  render() {
    const { title} = this.props
    return (
      <div>
        <div>Step : {title}</div>
        {this.renderFiles()}
      </div>
    )
  }
}