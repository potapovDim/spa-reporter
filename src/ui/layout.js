import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Chart } from './charts'
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
    return (
      <Run title={current} content={suits[current]} />
    )
  }

  renderDateControls = () => {
    const { runs: { allRuns }, dispatch } = this.props
    const changeCurrent = (run) => dispatch(changeCurrentDisplayDatt(run))
    return (
      <div className="date-controls">
        {allRuns.map((run, index) =>
          <button className="date-controls__item"
            onClick={() => changeCurrent(run)}
            key={index}>{run}</button>)}
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
      <div className="layout">
        <nav className="controls">
          <button className="controls__item" onClick={this.handleAllRuns}>Render all runs</button>
          <button className="controls__item" onClick={this.handleOneRun}>Render one run</button>
        </nav>
        <h2>Results</h2>
        {!allRun && this.renderDateControls()}
        <section className="items-wrapper">
          {allRun ? this.renderRuns() : this.renderOneRun()}
        </section>
        <Chart />
      </div>
    )
  }
}

export default connect(state => state)(Layout)
