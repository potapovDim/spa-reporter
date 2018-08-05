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
        <nav className="controls">
          <button className="controls__item" onClick={this.handleAllRuns}>Render all runs</button>
          <button className="controls__item" onClick={this.handleOneRun}>Render one run</button>
        </nav>
        {this.renderRun()}
        <h2>Results</h2>
      </div>
    )
  }
}

export default connect(state => state)(Layout)
