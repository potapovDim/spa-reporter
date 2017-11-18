import { combineReducers, createStore } from 'redux'
import { scopeState, runsStates, successTests, failedTests } from './states'

const CHANGE_CURRENT_DATE = 'CHANGE_CURRENT_DATE'
const SHOW_SUCCESS_RUNS = 'SHOW_SUCCESS_RUNS'
const SHOW_FAILED_RUNS = 'SHOW_FAILED_RUNS'
const SHOW_ALL_RUNS = 'SHOW_ALL_RUNE'

export const changeCurrentDisplayDatt = (date) => ({ type: CHANGE_CURRENT_DATE, date })
export const showAllRuns = () => ({ type: SHOW_ALL_RUNS })
export const showOnlySuccessRuns = () => ({ type: SHOW_SUCCESS_RUNS })
export const showOnlyFailedRuns = () => ({ type: SHOW_FAILED_RUNS })

const runs = (state = runsStates, { type, ...rest }) => {
  switch (type) {
    case CHANGE_CURRENT_DATE:
      return { ...state, current: rest.date }
    default:
      return state
  }
}

const suits = (state = scopeState, { type, ...rest }) => {
  switch (type) {
    case SHOW_SUCCESS_RUNS:
      return { ...successTests }
    case SHOW_FAILED_RUNS:
      return { ...failedTests }
    case SHOW_ALL_RUNS:
      return { ...scopeState }
    default:
      return state
  }
}

export default createStore(combineReducers({
  suits,
  runs
}))
