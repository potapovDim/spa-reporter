import React, {Component} from 'react'
import {Doughnut} from 'react-chartjs-2'
import {chartTransfer} from '../ui-control/rx_ui_control'

const data = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{

    data: [300, 50, 100, 333],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#EFDBB2'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#F6546A'
    ]
  }]
}

export class Chart extends Component {
  componentWillMount() {chartTransfer.subscribe()}
  render() {
    const props = {
      height: 400,
      width: 500
    }
    return <div>
      <Doughnut data={data} {...props} />
    </div>
  }
}