import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Run} from './run'

class Layout extends Component {

  renderContent = () => {
    const {runs} = this.props
    return runs.map((run, index) => <Run key={index} {...run} />)
  }

  render() {
    return (
      <div className="layout">
        {this.renderContent()}
        {/* <h2>Results</h2> */}
      </div>
    )
  }
}

export default connect(state => state)(Layout)

Layout.propTypes = {
  runs: PropTypes.array
}
