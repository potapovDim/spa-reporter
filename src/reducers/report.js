import { combineReducers, createStore } from 'redux'
let initialState
let currentInitialState
try {
  initialState = require('./base.json')
  const keys = Object.keys(initialState)
  currentInitialState = {
    allRuns: keys,
    current: keys[keys.length - 1]
  }
} catch (error) {
  initialState = {}
  currentInitialState = {
    allRuns: [],
    current: null
  }
}

const runs = (state = currentInitialState, { type, ...rest }) => {
  switch (type) {
    default:
      return state
  }
}

const suits = (state = initialState, { type, ...rest }) => {
  switch (type) {
    default:
      return state
  }
}

export default createStore(combineReducers({
  suits,
  runs
}))