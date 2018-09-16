import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Step} from './step'

export class Hook extends Component {

  renderSteps = () => {
    const {steps} = this.props
    return steps.map((step, index) => <Step key={index} {...step} />)
  }

  render() {
    const {title} = this.props
    return (
      <div>
        <div>Hook: {title}</div>
        {this.renderSteps()}
      </div>
    )
  }
}

Hook.propTypes = {
  steps: PropTypes.array,
  title: PropTypes.string
}
