import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Chart from './chart_component'
import {SuitRun} from './suit_run_component'
import {componentTransfer} from '../ui-control/rx_ui_control'

class DynamicController extends Component {

  state = {testsData: null, stats: null}

  componentDidMount() {
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
    const {runs} = this.props
    return (
      <div>
        {
          testsData
            ? <div>
              <button onClick={this.closeCurrentRunInfo}>close Info</button>
              <SuitRun {...testsData} />
            </div>
            : <Chart runs={runs} />
        }
      </div>
    )
  }
}

export default connect(({runs}) => ({runs}))(DynamicController)

DynamicController.propTypes = {
  runs: PropTypes.array
}
