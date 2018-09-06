import React, {Component} from 'react'
import {Doughnut, HorizontalBar} from 'react-chartjs-2'


const getDurationChart = ({stats}) => {
  return stats.reduce((dataStruct, statItem) => {
    dataStruct.labels.push(statItem.runName)
    dataStruct.datasets[0].data.push(statItem.duration)
    return dataStruct
  }, {
      labels: [],
      datasets: [
        {
          label: 'Base run stats duration',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 2,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: []
        }
      ]
    })
}

const mapData = (elementData) => {
  const dataForChart = elementData.reduce((acc, item) => {
    acc.labels.push()
  }, {
      labels: [], datasets: {
        data: [],
        backgroundColor: [],
        hoverBackgroundColor: []
      }
    })

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
}




export class Chart extends Component {
  state = {}

  render() {
    console.log(JSON.stringify(this.props))
    const props = {
      height: 400,
      width: 500
    }
    console.log(this.props.stats)
    return <div>
      <HorizontalBar data={getDurationChart(this.props)} />
      <Doughnut  {...props} />
    </div>
  }
}