/* eslint-disable */

/**
 * Sorting suits by first first test (it) start date time
 *
 * @param {Array} suits
 * [{
 * "title": "sring",
   "status": boolean,
   "hooks": Array[],
   "tests": Array[],
   "browser": "string"
 * }]
 * @returns {Array} suits what was reformated
 */

function sorSuits(suits) {
  const sortCb = (suitItemA, suitItemB) => {
    if(!suitItemA.tests.length) {return -1}
    if(suitItemA.tests[0].start < suitItemB.tests[0].start) {return -1}
    else if(suitItemA.tests[0].start > suitItemB.tests[0].start) {return 1}
    return 0
  }
  return suits.sort(sortCb)
}


/**
 * Sorting suits by first first test (it) start date time
 *
 * @param {Array} runs
 *  [{
    "stats": "object",
    "runName": "string",
    "suits": Array<{
         "title": "sring",
         "status": boolean,
         "hooks": Array[],
         "tests": Array[],
         "browser": "string"
        }>,
    "opts": "object",
    "dirDate": "string"
  },
 * @returns {Array} suits what was reformated
 */
function getUniqMap(runs) {

  const mapUniq = runs.map((run) => {
    const {suits} = run
    const uniqMap = sorSuits(suits).reduce((uniqMapAcc, suit) => {
      // console.log(Object.keys(suit))
      const {title} = suit

      if(uniqMapAcc[title]) {uniqMapAcc[title].push(suit)}
      else {uniqMapAcc[title] = []; uniqMapAcc[title].push(suit)}
      return uniqMapAcc
    }, {})

    const suitsWithHistory = Object.keys(uniqMap).map((uniqMapKey) => {
      const firstSuit = uniqMap[uniqMapKey][0]
      const historyArr = uniqMap[uniqMapKey].splice(1, uniqMap[uniqMapKey].length)
      firstSuit.history = historyArr
      return firstSuit
    })
    return {...run, suits: suitsWithHistory}
  })
  // fs.writeFileSync('./test1.json', JSON.stringify(mapUniq))
  return mapUniq
}

module.exports = {
  getUniqMap
}
