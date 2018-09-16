import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {BarChart} from './charts/bar'
import {PieChart} from './charts/pie'
import {componentTransfer} from '../ui-control/rx_ui_control'

export default class MainChart extends Component {

  state = {line: null}

  handleRunFocus = ({label, duration}) => {
    const {runs} = this.props
    const requiredRun = runs.find((item) => (item.stats.duration === duration) && (item.runName === label))
    this.setState({line: {label, requiredRun}})
  }

  handFocusPie = ({runName, state}) => {
    const {runs} = this.props
    const tests = runs
      .find((item) => (item.runName === runName))
      .suits
      .reduce((testsAcc, suit) => {
        testsAcc
          .push(...suit
            .tests
            .filter((testItem) => testItem.state === state)
          )
        return testsAcc
      }, [])
    componentTransfer.next({tests})
  }

  getContent = () => {
    const {line} = this.state
    return line
      ? <PieChart {...line} handFocusPie={this.handFocusPie} />
      : <BarChart {...this.props} handleRunFocus={this.handleRunFocus} />
  }

  render() {
    return (
      <div>{this.getContent()}</div>
    )
  }
}


MainChart.propTypes = {
  runs: PropTypes.array
}
