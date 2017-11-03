import React, { Component } from 'react'
import _ from 'lodash'

import {Suit} from './suit'

export class Run extends Component {
  renderSuits = () => {
    const { content: { suits } } = this.props
    return suits.map((suit, index) => <Suit key={index} {...suit}/>)
  }

  render() {
    const { title } = this.props
    return (
      <div>
        <div>Run: {title}</div>
        {this.renderSuits()}
      </div>
    )
  }
}
