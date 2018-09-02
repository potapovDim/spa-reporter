import React, {Component} from 'react'
import {Chart} from './chart_component'
import {SuitRun} from './suit_run_component'
import {componentTransfer, chartTransfer} from '../ui-control/rx_ui_control'

export default class DynamicController extends Component {

  state = {testsData: null, stats: null}

  componentWillMount() {
    componentTransfer.subscribe((data) => this.setState({testsData: data}))
  }

  componentWillUnmount() {
    componentTransfer.unsubscribe()
  }

  closeCurrentRunInfo = () => {
    this.setState({testsData: null})
  }

  render() {
    const {testsData, stats} = this.state
    return (
      <div>
        {
          testsData
            ? <div>
              <button onClick={this.closeCurrentRunInfo}>close Info</button>
              <SuitRun tests={testsData} />
            </div>
            : <Chart />
        }
      </div>
    )
  }
}