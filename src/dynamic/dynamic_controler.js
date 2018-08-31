const {EventEmitter} = require('events')

import React, {Component} from 'react'
import {Chart} from './chart_component'
import {SuitRun} from './suit_run_component'
import {componentTransfer} from '../ui-control/rx_ui_control'

export default class DynamicController extends Component {

  state = {
    testsData: null
  }

  componentWillMount() {
    componentTransfer.subscribe((data) => {
      console.log(data)
      this.setState({testsData: data}, () => {
        console.log(this.state)
      })
    })
  }
  componentWillUnmount() {
    componentTransfer.unsubscribe()
  }

  closeCurrentRunInfo = () => {
    this.setState({suitInfo: false, testsData: null})
  }
  render() {
    const {testsData} = this.state
    console.log(this.state)
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