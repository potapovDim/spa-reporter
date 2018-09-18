/* eslint-disable */


function sorSuits(suits) {
  const sortCb = (suitItemA, suitItemB) => {
    if(suitItemA.tests.length) {return -1}
    if(suitItemA.tests[0].start < suitItemB.tests[0].start) {return -1}
    else if(suitItemA.tests[0].start > suitItemB.tests[0].start) {return 1}
    return 0
  }
  return suits.sort(sortCb)
}

function getUniqMap(suits) {
  return suits.reduce((uniqMap, suit) => {
    const {title} = suit;
    if(uniqMap[title]) {uniqMap[title].push(suit)}
    else {uniqMap[title] = []; uniqMap[title].push(suit)}
    return uniqMap
  }, {})
}


function combineSuitsHistory(suits) {

}
