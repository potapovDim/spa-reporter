":" //; exec /usr/bin/env node

const copyDir = require('copy-dir')
const path = require('path')
const fs = require('fs')
const reportDir = path.resolve(__dirname, './reporter')

function executeCopyDir(reportPath) {copyDir.sync(path.resolve(process.cwd(), reportPath), reportDir)}

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

function getSuitFiles() {return walkSync(reportDir).filter(function(file) {return file.includes('-suit.json')})}


function mapStepsToRequiredData(steps, file) {
  const dir = path.dirname(file)
  return steps.map(function(step) {
    const title = step.title
    const attachments = step.files.map(function(file) {
      const ext = path.extname(path.resolve(dir, file))
      if(!fs.existsSync('./src/images')) {fs.mkdirSync('./src/images')}
      if(ext === '.png') {
        fs.createReadStream(path.resolve(dir, file)).pipe(fs.createWriteStream(path.resolve(__dirname, `./src/images/${file}`)))
        return {img: `./images/${file}`}
      } else if(ext === '.json') {
        return {json: require(path.resolve(dir, file))}
      } else {
        const text = fs.readFileSync(path.resolve(dir, file)).toString('utf8')
        return {text}
      }
    })
    return {title, attachments}
  })
}

const testStackIncludes = ['failed', 'broken']

function getSuitToData(suitData, file) {
  const title = suitData.title
  const status = suitData.status
  const browser = suitData.browser

  const hooks = suitData.hooks.map(function(hook) {
    const title = hook.title
    const start = hook.timeStart
    const end = hook.timeEnd
    const state = hook.state
    const duration = hook.duration
    const steps = mapStepsToRequiredData(hook.steps, file)

    return {title, start, state, end, duration, steps, errorStack: testStackIncludes.includes(state) ? hook.errorStack.stack : undefined}
  })

  const tests = suitData.tests.map(function(test) {
    const title = test.title
    const start = test.timeStart
    const end = test.timeEnd
    const testOptions = test.testOptions
    const state = test.state
    const duration = test.duration
    const steps = mapStepsToRequiredData(test.steps, file)

    return {title, start, state, end, duration, steps, testOptions, errorStack: testStackIncludes.includes(state) ? test.errorStack.stack : undefined}

  })
  return {title, status, hooks, tests, browser}
}

function putBaseFile() {
  const data = getSuitFiles().map(function(file) {
    const lastDir = path.dirname(file).split('/')
    const JSON_DATA = require(file)
    // need for consistency
    /* {  suites: 9,
          tests: 17,
          passes: 6,
          pending: 3,
          failures: 11,
          start: '2018-09-09T13:04:25.756Z',
          end: '2018-09-09T13:04:27.365Z',
          duration: 1609 }
     */
    const stats = {
      ...JSON_DATA.stats,
      passed: JSON_DATA.stats.passes,
      failed: JSON_DATA.stats.failures
    }
    const runName = JSON_DATA.runName
    const opts = JSON_DATA.opts
    const title = JSON.title

    const suits = JSON_DATA.suits.map(function(suit) {
      return getSuitToData(suit, file)
    })
    return {stats, runName, suits, opts, dirDate: lastDir[lastDir.length - 1]}
  })
  if(fs.existsSync(path.resolve(__dirname, './src/reducers/base.json'))) {
    fs.unlinkSync(path.resolve(__dirname, './src/reducers/base.json'))
  }
  fs.writeFileSync(path.resolve(__dirname, './src/reducers/base.json'), JSON.stringify(data))
}

module.exports = {
  putBaseFile,
  executeCopyDir
}
