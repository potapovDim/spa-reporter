import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Menu } from './menu'
import { Suit } from './suit'
import { Run } from './run'

import { changeCurrentDisplayDatt } from '../reducers/report'

class Layout extends Component {
  state = {
    allRun: true
  }
  renderRuns = () => {
    const { suits, runs: { allRuns } } = this.props
    return allRuns.map((run, index) => <Run key={index} title={run} content={suits[run]} />)
  }
  renderOneRun = () => {
    const { suits, runs: { allRuns, current }, dispatch } = this.props
    const changeCurrent = (run) => dispatch(changeCurrentDisplayDatt(run))
    return (
      <div>
        {allRuns.map((run, index) => <button onClick={() => changeCurrent(run)} key={index}>{run}</button>)}
        {allRuns.length > 0 && <Run title={current} content={suits[current]} />}
      </div>
    )
  }


  handleAllRuns = () => {
    this.setState({ allRun: true })
  }

  handleOneRun = () => {
    this.setState({ allRun: false })
  }
  render() {
    const { allRun } = this.state
    return (
      <div>
        <button onClick={this.handleAllRuns}>Render all runs</button>
        <button onClick={this.handleOneRun}>Render one run</button>
        <div>Layout </div>
        {allRun ? this.renderRuns() : this.renderOneRun()}
      </div>
    )
  }
}

export default connect(state => state)(Layout)