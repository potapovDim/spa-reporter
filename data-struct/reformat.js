/* eslint-disable */
const {getUniqMap} = require('./combine_suits_history')

function getUniqSuits(suits) {
  const combineStatsRest = ({start, end, ...rest1}, {start: start1, end: end1, ...rest2}) => {
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

  const uniqSuitsObj = suits.reduce((uniqSuits, suit) => {
    const {runName} = suit
    if(!uniqSuits[runName]) {
      uniqSuits[runName] = suit
    } else {
      const exitSuit = uniqSuits[runName]
      const combinedStatsRest = combineStatsRest(exitSuit.stats, suit.stats)
      const startEndDate = getStartEndDate(exitSuit.stats, suit.stats)
      const stats = {...combinedStatsRest, ...startEndDate}
      exitSuit.suits.push(...suit.suits)
      uniqSuits[runName] = {...exitSuit, stats, suits: exitSuit.suits}
    }
    return uniqSuits
  }, {})
  const uniqSuitsArr = Object.keys(uniqSuitsObj).reduce((accUniqArr, uniqSuitsArrKey) => {
    accUniqArr.push(uniqSuitsObj[uniqSuitsArrKey]); return accUniqArr
  }, [])
  return uniqSuitsArr

}

module.exports = {
  getUniqMapWIthHistory: (suits) => getUniqMap(getUniqSuits(suits))
}

// fs.writeFileSync('./test.json', JSON.stringify(data))
// // console.log(JSON.stringify())
