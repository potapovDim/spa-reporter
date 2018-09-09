
function getScopedColor() {
  let scopedColor = 'rgba(255, 255, 255, 1)'
  const getRandomColor = (alpfa = 1, getScoped = false) => {
    Math.floor((Math.random(1, 255) * 100))
    const r = Math.floor((Math.random(1, 255) * 100))
    const g = Math.floor((Math.random(1, 255) * 100))
    const b = Math.floor((Math.random(1, 255) * 100))
    const color = `rgba(${r}, ${g}, ${b}, ${alpfa})`
    if(getScoped) {return scopedColor}
    scopedColor = color
    return `rgba(${r}, ${g}, ${b}, ${alpfa})`
  }
  return getRandomColor
}

module.exports = getScopedColor()
