import React, {Component} from 'react'
import {Step} from './step'
import './style/test.scss'

export class Test extends Component {
  renderSteps = () => {
    const {steps} = this.props
    return steps.map((step, index) => <Step key={index} {...step} />)
  }
  render() {
    const {title, start, end, duration, state} = this.props
    const getClass = () => {
      switch(state) {
        case 'failed': return 'failed';
        case 'passed': return 'passed';
        case 'broken': return 'broken';
      }
    }
    return (
      <div className={"suit__content " + getClass()}>
        <div> Test: {title}</div >
        <div className="flex__test">
          <div className="test__header_item">State: {state}</div>
          {/*<div className="test__header_item">Start: {start} </div>*/}
          <div className="test__header_item">Duration: {duration}</div>
          {/*<div className="test__header_item">End: {end} </div> */}
        </div>
        {this.renderSteps()}
      </div >
    )
  }
}
