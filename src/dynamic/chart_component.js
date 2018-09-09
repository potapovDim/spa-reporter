import React, {Component} from 'react'
import {BarChart} from './charts/bar'
import {PieChart} from './charts/pie'

export default class MainChart extends Component {
  state = {}

  handleRunFocus = ({label}) => {
    const {runs} = this.props
    const requiredRun = runs.find((item) => (item.runName === label))
    this.setState({line: {label, requiredRun}})
  }

  getContent = () => {
    const {line} = this.state
    if(line) {return <PieChart {...line} />}
    else {return <BarChart {...this.props} handleRunFocus={this.handleRunFocus} />}
  }

  render() {
    return (
      <div>{this.getContent()}</div>
    )
  }
}
