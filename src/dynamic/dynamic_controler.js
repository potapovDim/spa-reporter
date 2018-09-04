import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Chart} from './chart_component'
import {SuitRun} from './suit_run_component'
import {componentTransfer, chartTransfer} from '../ui-control/rx_ui_control'

class DynamicController extends Component {

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
    const {testsData} = this.state
    const {generalStats} = this.props
    return (
      <div>
        {
          testsData
            ? <div>
              <button onClick={this.closeCurrentRunInfo}>close Info</button>
              <SuitRun tests={testsData} />
            </div>
            : <Chart stats={generalStats} />
        }
      </div>
    )
  }
}

export default connect(({runs}) => ({generalStats: runs.map(run => ({...run.stats, runName: run.runName}))}))(DynamicController)