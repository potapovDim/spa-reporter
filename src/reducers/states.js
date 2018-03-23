let scopeState
let runsStates
let failedTests
let successTests
const { pick, mapValues } = require('lodash')

try {
    scopeState = require('./base.json')
    const keys = Object.keys(scopeState)
    runsStates = {
        allRuns: keys,
        current: keys[keys.length - 1]
    }
    failedTests = Object.keys(scopeState).reduce((obj, value, index) => {
        return {
            ...obj, [value]: {
                ...scopeState[value], suits: scopeState[value].suits.map((suit) => {
                    return { ...suit, tests: suit.tests.filter((test) => test.state === 'failed') }
                }).filter(suit => suit.tests.length)
            }
        }
    }, {})
    successTests = Object.keys(scopeState).reduce((obj, value, index) => {
        return {
            ...obj, [value]: {
                ...scopeState[value], suits: scopeState[value].suits.map((suit) => {
                    return { ...suit, tests: suit.tests.filter((test) => test.state === 'passed') }
                }).filter(suit => suit.tests.length)
            }
        }
    }, {})
} catch (error) {
    scopeState = {}
    runsStates = {
        allRuns: [],
        current: null
    }
    failedTests = {}
    successTests = {}
}

module.exports = {
    scopeState,
    runsStates,
    successTests,
    failedTests
}