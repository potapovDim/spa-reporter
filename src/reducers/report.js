
import {scopeState} from './states'
import {
  CHANGE_CURRENT_DATE,
  SHOW_ALL_RUNS,
  SHOW_FAILED_RUNS,
  SHOW_SUCCESS_RUNS,
  FILTER_BY_BROWSER
} from './action_types'

export const changeCurrentDisplayDate = (date = new Date(Date.now())) => ({type: CHANGE_CURRENT_DATE, date})
export const showOnlySuccessRuns = () => ({type: SHOW_SUCCESS_RUNS})
export const showOnlyFailedRuns = () => ({type: SHOW_FAILED_RUNS})
export const showAllRuns = () => ({type: SHOW_ALL_RUNS})
export const filterByBrowser = (browser) => ({type: SHOW_ALL_RUNS, browser})

export const runs = (state = scopeState, {type, ...rest}) => {
  switch(type) {
    case FILTER_BY_BROWSER: {
      return {...state, suits: state.suits.filter((suit) => suit.browser === rest.browser)}
    }
    default:
      return state
  }
}
