import React, {Component} from 'react'
import {Chart} from 'chart.js'

export default class MainChart extends Component {
  componentDidMount() {
    this.ctxCanvas = document.getElementById("myChart").getContext('2d')
    this.myChart = new Chart(this.ctxCanvas, {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        // onClick: function() {
        //   console.log(arguments)
        // },
        events: ['click'],
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }

  handleClick = (e) => {
    const a = this.myChart.getElementAtEvent(e)
  }

  render() {
    return (<div>
      <canvas id="myChart" width="400" height="400" onClick={this.handleClick}></canvas>
    </div>)
  }
}

// export default connect(state => state)(MainChart)