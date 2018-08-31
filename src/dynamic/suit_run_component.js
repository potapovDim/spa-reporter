import React, {Component} from 'react'
import {Test} from '../ui/test'

export class SuitRun extends Component {

  renderTests = () => {
    const {tests} = this.props
    return tests.map((test, index) => <Test key={index} {...test} />)
  }

  render() {
    return (<div>{this.renderTests()}</div>)
  }
}