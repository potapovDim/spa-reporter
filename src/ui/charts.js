import React from 'react'
import {Pie} from 'react-chartjs-2'

const data = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

const legendOpts = {
    onClick: (e, item) => console.log(item),
    onHover: (e, item) => console.log(item),
};

export class Chart extends React.Component {
    displayName = 'LegendExample'
    state = {
        legend: legendOpts
    }
    render() {
        return (
            <div>
                <h2>Legend Handlers Example</h2>
                <p>Hover over label and click</p>
                <Pie data={data} legend={this.state.legend} />
            </div>
        );
    }
}