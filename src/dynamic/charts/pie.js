import React, {Component} from 'react'
import {Chart} from 'chart.js'
import getRandomColor from '../../random_color'
import pick from 'lodash/pick'
import {componentTransfer} from '../../ui-control/rx_ui_control'

const getData = ({requiredRun: {stats}}) => {
  const pickData = pick(stats, ['failures', 'passes', 'pending'])
  const colors = {
    failures: 'rgba(255, 0, 0, 0.6)',
    passes: 'rgba(0, 255, 0, 0.6)',
    pending: 'rgba(0, 0, 255, 0.6)'
  }
  const dataAcc = {
    datasets: [{
      data: [],
      backgroundColor: []
    }],
    labels: []
  }
  Object.keys(pickData).forEach((key) => {
    dataAcc.datasets[0].data.push(pickData[key])
    dataAcc.datasets[0].backgroundColor.push(colors[key])
    dataAcc.labels.push(key)
  })
  return {data: dataAcc}
}

export class PieChart extends Component {
  componentDidMount() {
    console.log(this.props, '!!!!!!!!')
    this.ctxCanvas = document.getElementById("my__pie_chart").getContext('2d')
    this.myChart = new Chart(this.ctxCanvas, {type: 'pie', ...getData(this.props)})
  }

  handleClick = (e) => {
    const data = this.myChart.getElementAtEvent(e)
  }

  render() {
    return (
      <div><canvas id="my__pie_chart" width="400" height="400" onClick={this.handleClick}></canvas></div>
    )
  }
}
