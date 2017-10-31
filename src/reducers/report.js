import {combineReducers, createStore} from 'redux';
const initialState = require('./base')

const suits = (state = initialState, { type, ...rest }) => {
  switch (type) {
    default:
      return state
  }
};

export default createStore(combineReducers({
  suits
}));