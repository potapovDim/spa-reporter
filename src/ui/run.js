import React, {Component} from 'react'
import _ from 'lodash'
import moment from 'moment'
import {Suit} from './suit'
import './style/style.scss'

export class Run extends Component {

  renderSuits = () => {
    const {suits} = this.props
    return suits.map((suit, index) => <Suit key={index} {...suit} />)
  }

  render() {
    const {dirDate} = this.props
    const title = moment(+dirDate).format('MMMM Do YYYY, h:mm:ss a')
    return (
      <div className="item">
        <div className="item__date">Run: <time dateTime={dirDate}>{title}</time></div>
        {this.renderSuits()}
      </div>
    )
  }
}
