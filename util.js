/* eslint-disable */
const suits = require('./src/reducers/base.json')

function getEarliestStart(suits) {
  return suits.reduce((currentData, suit) => {
    const {stats: {start}} = suit
    const dataMs = +new Date(start)
    if(currentData === undefined) {currentData = dataMs}
    if(currentData >= dataMs) {currentData = dataMs}
    return currentData
  }, undefined)
}

function getLatestEnd(suits) {
  return suits.reduce((currentData, suit) => {
    const {stats: {start}} = suit
    const dataMs = +new Date(start)
    if(currentData === undefined) {currentData = dataMs}
    if(currentData <= dataMs) {currentData = dataMs}
    return currentData
  }, undefined)
}


function getUniqSuits(suits) {
  const combineStats = ({start, end, ...rest1}, {start: start1, end: end1, ...rest2}) => {
    const combinedStats = {}
    Object.keys(rest1).forEach((key) => {
      combinedStats[key] = rest1[key] + rest2[key]
    })
    return combinedStats
  }

  const getStartEndDate = (stats1, stats2) => {
    const toNum = (dateStr) => +new Date(dateStr)
    const {start: start1, end: end1} = stats1
    const {start: start2, end: end2} = stats2
    return {
      start: toNum(start1) <= toNum(start2) ? start1 : start2,
      end: toNum(end1) <= toNum(end2) ? start1 : start2
    }
  }

  const uniqSuitsArr = nusuits.reduce((uniqSuits, suit) => {

    const {stats, runName} = suit

  }, {})
}

function mergeSuitsByRunName(suits) {


  const start = getEarliestStart(suits)
  const end = getLatestEnd(suits)

  console.log(start, end)
}

mergeSuitsByRunName(suits)

