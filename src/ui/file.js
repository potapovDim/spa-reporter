import React, { Component } from 'react'

export class File extends Component {
  renderFile = () => {
    const { file } = this.props
    switch (file.type) {
      case 'json':
        return <div>{JSON.stringify(file.content, null, '\t')}</div>
      case 'text':
        return <div>{file.content}</div>
      case 'img':
        return <img src={`./src/resources/${file.content}`} />
    }
  }
  render() {
    const { file } = this.props
    console.log(file)
    return (
      <div>
        <div>AttachmentData:  {file.id}</div>
        {this.renderFile()}
      </div>
    )
  }
}