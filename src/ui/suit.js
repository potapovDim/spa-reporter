import React, { Component } from 'react'
import { Test } from './test'

export class Suit extends Component {
  state = {
    open: false
  }

  openInfo = () => {
    this.setState({open: !this.state.open})
  }

  renderTests = () => {
    const { tests } = this.props
    return tests.map((test, index) => <Test key={index} {...test} />)
  }
  render() {
    const { title } = this.props
    return (
      <div className="suit">
        <button type="button" className="suit__button" onClick={this.openInfo}>Suit: {title}</button>
        {this.state.open && this.renderTests()}
      </div>
    )
  }
}
