import {combineReducers, createStore} from 'redux'
import {runs} from './report'


export default createStore(combineReducers({
  runs
}))
