let scopeState
let runsStates
let failedTests
let successTests

const {pick, mapValues} = require('lodash')

try {
  scopeState = require('./base.json')
} catch(error) {
  scopeState = []
}

module.exports = {
  scopeState
}