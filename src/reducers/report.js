
import {scopeState} from './states'

const CHANGE_CURRENT_DATE = 'CHANGE_CURRENT_DATE'
const SHOW_SUCCESS_RUNS = 'SHOW_SUCCESS_RUNS'
const SHOW_FAILED_RUNS = 'SHOW_FAILED_RUNS'
const SHOW_ALL_RUNS = 'SHOW_ALL_RUNE'

export const changeCurrentDisplayDatt = (date) => ({type: CHANGE_CURRENT_DATE, date})
export const showAllRuns = () => ({type: SHOW_ALL_RUNS})
export const showOnlySuccessRuns = () => ({type: SHOW_SUCCESS_RUNS})
export const showOnlyFailedRuns = () => ({type: SHOW_FAILED_RUNS})

export const runs = (state = scopeState, {type, ...rest}) => {
  switch(type) {
    default:
      return state
  }
}
