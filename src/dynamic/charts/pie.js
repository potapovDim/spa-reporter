import React, {Component} from 'react'
import {Chart} from 'chart.js'
import getRandomColor from '../../random_color'

const getData = (run) => {
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

var config = {
  type: 'pie',
  data: {
    datasets: [{
      data: [

      ],
      backgroundColor: [

      ]
    }],
    labels: [
      'Red',
      'Orange',
      'Yellow',
      'Green',
      'Blue'
    ]
  },
  options: {
    responsive: true
  },
  options: {
    title: {
      text: 'Chart.js Time Scale'
    },
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          tooltipFormat: 'll HH:mm'
        },
        scaleLabel: {
          display: true,
          labelString: 'Date'
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'value'
        }
      }]
    },
  }
};



export class PieChart extends Component {
  componentDidMount() {
    this.ctxCanvas = document.getElementById("myChart").getContext('2d')
    this.myChart = new Chart(this.ctxCanvas, {type: 'pie'})
  }

  handleClick = (e) => {
    // const [{_model: {label}}] = this.myChart.getElementAtEvent(e)
  }

  render() {
    return (
      <div><canvas id="myChart" width="400" height="400" onClick={this.handleClick}></canvas></div>
    )
  }
}
