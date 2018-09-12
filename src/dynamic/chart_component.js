import React, {Component} from 'react'
import {BarChart} from './charts/bar'
import {PieChart} from './charts/pie'
import {componentTransfer} from '../ui-control/rx_ui_control'

export default class MainChart extends Component {
  state = {}

  handleRunFocus = ({label}) => {
    const {runs} = this.props
    const requiredRun = runs.find((item) => (item.runName === label))
    this.setState({line: {label, requiredRun}})
  }

  handFocusPie = ({runName, state}) => {
    const {runs} = this.props
    const tests = runs
      .find((item) => (item.runName === runName))
      .suits
      .reduce((testsAcc, suit) => {
        testsAcc.push(...suit
          .tests
          .filter((testItem) => testItem.state === state));
        return testsAcc
      }, [])
    componentTransfer.next(tests)
  }

  getContent = () => {
    const {line} = this.state
    if(line) {return <PieChart {...line} handFocusPie={this.handFocusPie} />}
    else {return <BarChart {...this.props} handleRunFocus={this.handleRunFocus} />}
  }

  render() {
    return (
      <div>{this.getContent()}</div>
    )
  }
}
