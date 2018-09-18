/* eslint-disable */
const fs = require('fs')


function sorSuits(suits) {
  const sortCb = (suitItemA, suitItemB) => {
    if(!suitItemA.tests.length) {return -1}
    if(suitItemA.tests[0].start < suitItemB.tests[0].start) {return -1}
    else if(suitItemA.tests[0].start > suitItemB.tests[0].start) {return 1}
    return 0
  }
  return suits.sort(sortCb)
}

function getUniqMap(runs) {

  const mapUniq = runs.map(({suits}) => {
    const uniqMap = sorSuits(suits).reduce((uniqMap, suit) => {
      console.log(Object.keys(suit))
      const {title} = suit
      if(uniqMap[title]) {uniqMap[title].push(suit)}
      else {uniqMap[title] = []; uniqMap[title].push(suit)}
      return uniqMap
    }, {})
    return uniqMap
  })

  fs.writeFileSync('./test1.json', JSON.stringify(mapUniq))
  return mapUniq
}

module.exports = {
  getUniqMap
}


// function combineSuitsHistory(suits) {

// }
