import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {Chart} from './charts'
import {Suit} from './suit'
import {Run} from './run'

import {changeCurrentDisplayDatt} from '../reducers/report'

class Layout extends Component {
  state = {
    allRun: true
  }

  renderRun = () => {
    console.log(this.props)
    const {runs} = this.props
    return runs.map((run, index) => <Run key={index} {...run} />)
  }

  handleAllRuns = () => {
    this.setState({allRun: true})
  }

  handleOneRun = () => {
    this.setState({allRun: false})
  }

  render() {
    return (
      <div className="layout">
        {this.renderRun()}
        <h2>Results</h2>
      </div>
    )
  }
}

export default connect(state => state)(Layout)
