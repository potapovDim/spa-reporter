import React, { Component } from 'react'
import { Step } from './step'

export class Test extends Component {
  renderSteps = () => {
    const { steps } = this.props
    return steps.map((step, index) => <Step key={index} {...step} />)
  }
  render() {
    const { title } = this.props
    return (
      <div>
        <div>Test: {title}</div>
        {this.renderSteps()}
      </div>
    )
  }
}
