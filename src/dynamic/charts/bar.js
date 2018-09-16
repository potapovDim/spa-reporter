import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Chart} from 'chart.js'
import getRandomColor from '../../random_color'

const getData = (runs) => {
  const dataAcc = {
    labels: [],
    datasets: [{
      label: 'Run time duration',
      data: [],
      backgroundColor: [],
      borderColor: [],
      borderWidth: 1
    }]
  }
  const data = runs.reduce((acc, item) => {
    acc.labels.push(item.runName)
    acc.datasets[0].data.push(item.stats.duration)
    acc.datasets[0].backgroundColor.push(getRandomColor(0.3))
    return acc
  }, dataAcc)
  return {data}
}

export class BarChart extends Component {
  componentDidMount() {
    const {runs} = this.props
    this.ctxCanvas = document.getElementById("bar__chart_common").getContext('2d')
    this.myChart = new Chart(this.ctxCanvas, {type: 'bar', ...getData(runs)})
  }

  handleClick = (e) => {
    const {handleRunFocus} = this.props
    const [elementData] = this.myChart.getElementAtEvent(e)
    const {_model: {label}, _datasetIndex, _index} = elementData
    const duration = this.myChart.data.datasets[_datasetIndex].data[_index]
    handleRunFocus({label, duration})
  }

  render() {
    return (
      <div><canvas id="bar__chart_common" width="400" height="400" onClick={this.handleClick}></canvas></div>
    )
  }
}

BarChart.propTypes = {
  handleRunFocus: PropTypes.func,
  runs: PropTypes.array
}
