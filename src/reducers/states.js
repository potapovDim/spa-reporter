let scopeState = null

try {
  scopeState = require('./base.json')
} catch(error) {
  scopeState = []
}

module.exports = {
  scopeState
}
