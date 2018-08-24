import {
  runs,
  showAllRuns,
  showOnlyFailedRuns,
  showOnlySuccessRuns,
  changeCurrentDisplayDate
} from '../../src/reducers/report'
import {expect} from 'chai'

describe('runs + action creators', () => {
  it('showAllRuns', () => {
    expect(showAllRuns()).to.eql({type: 'SHOW_ALL_RUNS'})
  })
  it('showOnlyFailedRuns', () => {
    expect(showOnlyFailedRuns()).to.eql({type: 'SHOW_FAILED_RUNS'})
  })
  it('showOnlySuccessRuns', () => {
    expect(showOnlySuccessRuns()).to.eql({type: 'SHOW_SUCCESS_RUNS'})
  })
  it('changeCurrentDisplayDate', () => {
    expect(changeCurrentDisplayDate(1)).to.eql({type: 'CHANGE_CURRENT_DATE', date: 1})
  })
})
