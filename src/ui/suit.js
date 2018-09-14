import React, {Component} from 'react'
import {componentTransfer} from '../ui-control/rx_ui_control'
import './style/style.scss'

export class Suit extends Component {
  state = {open: false}

  openInfo = () => componentTransfer.next({tests: this.props.tests, hooks: this.props.hooks})

  render() {
    const {title} = this.props
    return (
      <div className="suit_title">
        <span className="suit__button truncate" onClick={this.openInfo}>Suit: {title}</span>
      </div>
    )
  }
}
