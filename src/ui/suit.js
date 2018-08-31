import React, {Component} from 'react'
import {Test} from './test'
import {componentTransfer} from '../ui-control/rx_ui_control'
export class Suit extends Component {
  state = {open: false}

  openInfo = () => {
    const {tests} = this.props
    componentTransfer.next(tests)
    // this.setState({open: !this.state.open})
  }

  renderTests = () => {
    console.log(this.props)
    const {tests} = this.props
    return tests.map((test, index) => <Test key={index} {...test} />)
  }

  render() {
    const {title} = this.props
    return (
      <div className="suit">
        <button type="button" className="suit__button" onClick={this.openInfo}>Suit: {title}</button>
      </div>
    )
  }
}
