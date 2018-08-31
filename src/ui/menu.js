import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  showOnlyFailedRuns,
  showOnlySuccessRuns,
  showAllRuns,
  filterByBrowser
} from '../reducers/report'

class Menu extends Component {
  componentDidMount() {

  }

  hadnleFilter = ({target: {value}}) => {
    const {filterByBrowser} = this.props
    filterByBrowser(value)
  }

  render() {
    const {failedTest, successTest, allRuns} = this.props
    return (
      <div>
        <select onChange={this.hadnleFilter}>
          <option value="chrome">chrome</option>
          <option value="firefox">firefox</option>
          <option value="internet explorer">IE</option>
          <option value="">All runs</option>
        </select>
      </div >
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    filterByBrowser: (browser) => dispatch(filterByBrowser(browser)),
    failedTest: () => dispatch(showOnlyFailedRuns()),
    successTest: () => dispatch(showOnlySuccessRuns()),
    allRuns: () => dispatch(showAllRuns())
  }
}

export default connect(state => state, mapDispatchToProps)(Menu)
