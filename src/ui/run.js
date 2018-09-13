import React, {Component} from 'react'
import _ from 'lodash'
import moment from 'moment'
import {Suit} from './suit'
import './style/style.scss'

export class Run extends Component {

  state = {open: false}

  renderContent = () => {
    const {suits = []} = this.props
    return suits.map((suit, index) => <Suit key={index} {...suit} />)
  }

  openContent = () => this.setState({open: !this.state.open})

  render() {
    const {open} = this.state
    const {dirDate} = this.props
    const title = moment(+dirDate).format('MMMM Do YYYY, h:mm:ss a')
    return (
      <div className="item">
        <div className="item__date"
          onClick={this.openContent}>Run: <time dateTime={dirDate}>{title}</time></div>
        {open && this.renderContent()}
      </div>
    )
  }
}
