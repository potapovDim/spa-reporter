import React, { Component } from 'react'
import { Test } from './test'

export class Suit extends Component {
  renderTests = () => {
    const { tests } = this.props
    return tests.map((test, index) => <Test key={index} {...test} />)
  }
  render() {
    const { title } = this.props
    return (
      <div>
        <div>Suit: {title}</div>
        {this.renderTests()}
      </div>
    )
  }
}
