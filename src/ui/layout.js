import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Menu } from './menu'
import { Suit } from './suit'
import { Run } from './run'

class Layout extends Component {
  renderRuns = () => {
    const { suits } = this.props
    const keys = _.keys(suits)
    return keys.map((key, index) => <Run key={index} title={key} content={suits[key]} />)
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <div>Layout </div>
        {this.renderRuns()}
      </div>
    )
  }
}

export default connect(state => state)(Layout)