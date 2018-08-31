import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {Run} from './run'
import {chartTransfer} from '../ui-control/rx_ui_control'

class Layout extends Component {
  state = {
    allRun: true
  }

  renderRun = () => {
    const {runs} = this.props
    chartTransfer.next(runs.map(item => item.stats))
    return runs.map((run, index) => <Run key={index} {...run} />)
  }

  handleAllRuns = () => this.setState({allRun: true})

  handleOneRun = () => this.setState({allRun: false})

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
