import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showOnlyFailedRuns, showOnlySuccessRuns, showAllRuns } from '../reducers/report'

class Menu extends Component {
  componentDidMount() {

  }
  render() {
    const { failedTest, successTest, allRuns } = this.props
    return (
      <div>
        <button onClick={successTest}>Show success runs</button>
        <button onClick={failedTest}>Show failed runs</button>
        <button onClick={allRuns}>Show all runs</button>
      </div>
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    failedTest: () => dispatch(showOnlyFailedRuns()),
    successTest: () => dispatch(showOnlySuccessRuns()),
    allRuns: () => dispatch(showAllRuns())
  }
}

export default connect(
  () => { },
  mapDispatchToProps)(Menu)
