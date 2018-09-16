import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Test} from '../ui/test'

export class SuitRun extends Component {

  renderContent = () => {
    const {tests} = this.props
    return tests.map((test, index) => <Test key={index} {...test} />)
  }

  render() {
    return (<div>{this.renderContent()}</div>)
  }
}

SuitRun.propTypes = {
  tests: PropTypes.array
}
