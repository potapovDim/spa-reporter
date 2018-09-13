import React, {Component} from 'react'
import {componentTransfer} from '../ui-control/rx_ui_control'
export class Suit extends Component {
  state = {open: false}

  openInfo = () => componentTransfer.next({tests: this.props.tests, hooks: this.props.hooks})

  render() {
    const {title} = this.props
    return (
      <div className="suit">
        <span className="suit__button truncate" onClick={this.openInfo}>Suit: {title}</span>
      </div>
    )
  }
}
