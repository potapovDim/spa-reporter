import React, { Component } from 'react'
import _ from 'lodash'

import {Suit} from './suit'
import './style.scss'

export class Run extends Component {
  renderSuits = () => {
    const { content: { suits } } = this.props
    return suits.map((suit, index) => <Suit key={index} {...suit}/>)
  }

  render() {
    const { title } = this.props
    return (
      <div className="item">
        <div className="item__date">Run: <time dateTime={title}>{title}</time></div>
        {this.renderSuits()}
      </div>
    )
  }
}
