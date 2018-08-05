":" //; exec /usr/bin/env node --harmony "$0" "$@";

const copyDir = require('copy-dir')
const path = require('path')
const argv = require('minimist')(process.argv.slice(2))
const fs = require('fs')
const reportDir = path.resolve(__dirname, './reporter')

copyDir.sync(path.resolve(process.cwd(), argv.report), reportDir)

const walkSync = function(dir, filelist = []) {
  const files = fs.readdirSync(dir)
  files.forEach(function(file) {
    if(fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist)
    }
    else {filelist.push(path.join(dir, file))}
  })
  return filelist
}

const files = walkSync(reportDir)
const suitsFiles = files.filter(function(file) {
  return file.includes('-suit.json')
})

const testStackIncludes = ['failed', 'broken']

function getSuitToData(suitData, file) {
  const dir = path.dirname(file)
  const title = suitData.title
  const status = suitData.status
  const tests = suitData.tests.map(function(test) {
    const title = test.title
    const start = test.timeStart
    const end = test.timeEnd
    const state = test.state
    const duration = test.duration
    if(testStackIncludes.includes(state)) {const errorStack = test.errorStack.stack}

    const steps = test.steps.map(function(step) {
      const title = step.title
      const attachments = step.files.map(function(file) {
        const ext = path.extname(path.resolve(dir, file))
        if(ext === '.png') {
          return {img: path.resolve(dir, file)}
        } else if(ext === '.json') {
          return {json: require(path.resolve(dir, file))}
        } else {
          const text = fs.readFileSync(path.resolve(dir, file)).toString('utf8')
          return {text}
        }
      })
      return {title, attachments}
    })
    return {title, start, end, duration, steps}
  })
  return {title, status, tests}
}


const data = suitsFiles.map(function(file) {
  const lastDir = path.dirname(file).split('/')
  const JSON_DATA = require(file)
  const stats = JSON_DATA.stats
  const suits = JSON_DATA.suits.map(function(suit) {
    return getSuitToData(suit, file)
  })
  return {stats, suits, dirDate: lastDir[lastDir.length - 1]}
})

function putBaseFile() {
  if(fs.existsSync(path.resolve(__dirname, './src/reducers/base.json'))) {
    fs.unlinkSync(path.resolve(__dirname, './src/reducers/base.json'))
  }
  fs.writeFileSync(path.resolve(__dirname, './src/reducers/base.json'), JSON.stringify(data))
}

putBaseFile()
