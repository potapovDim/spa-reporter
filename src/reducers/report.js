import { combineReducers, createStore } from 'redux'
let initialState
try {
  initialState = require('./base.json')
} catch (error) {
  initialState = {}
}


const suits = (state = initialState, { type, ...rest }) => {
  console.log(type, initialState)
  switch (type) {
    default:
      return state
  }
}

export default createStore(combineReducers({
  suits
}))