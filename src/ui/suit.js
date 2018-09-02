import React, {Component} from 'react'
import {componentTransfer} from '../ui-control/rx_ui_control'
export class Suit extends Component {
  state = {open: false}

  openInfo = () => componentTransfer.next(this.props.tests)

  render() {
    const {title} = this.props
    return (
      <div className="suit">
        <button type="button" className="suit__button" onClick={this.openInfo}>Suit: {title}</button>
      </div>
    )
  }
}
