import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Test} from '../ui/test'
import './style/suitrun.scss'

export class SuitRun extends Component {

  renderContent = () => {
    const {tests = []} = this.props
    return tests.map((test, index) => <Test key={index} {...test} />)
  }

  render() {
    const {history = [], title} = this.props
    return (
      <div> Suit title: {title} {history.length ? <button>History</button> : ''}
        <div className="suit_run__content">{this.renderContent()}</div>
      </div>

    )
  }
}

SuitRun.propTypes = {
  tests: PropTypes.array
}
