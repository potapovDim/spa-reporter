import React, {Component} from 'react'
import {Step} from './step'

export class Test extends Component {
  renderSteps = () => {
    const {steps} = this.props
    return steps.map((step, index) => <Step key={index} {...step} />)
  }
  render() {
    const {title, start, end, duration} = this.props
    return (
      <div className="suit__content">
        <div>Test: {title}</div>
        <div>Start: {start} </div>
        <div>Duration: {duration}</div>
        <div>End: {end} </div>
        {this.renderSteps()}
      </div >
    )
  }
}
