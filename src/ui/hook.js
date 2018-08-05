import React, { Component } from 'react'
import { Step } from './step'

export class Hook extends Component {
  renderSteps = () => {
    const { steps } = this.props
    return steps.map((step, index) => <Step key={index} {...step} />)
  }
  renderFiles = () => {
    const { files } = this.props
    return files.length && files.map((file, index) => <File key={index} file={file} />)
  }
  render() {
    const { title } = this.props
    return (
      <div>
        <div>Hook: {title}</div>
        {this.renderSteps()}
      </div>
    )
  }
}