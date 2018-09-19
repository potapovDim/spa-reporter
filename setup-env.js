/* eslint-disable */
":" //; exec /usr/bin/env node

const copyDir = require('copy-dir')
const path = require('path')
const fs = require('fs')
const reportDir = path.resolve(__dirname, './reporter')
const {getUniqMapWIthHistory} = require('./data-struct/reformat')

function executeCopyDir(reportPath) {
  copyDir.sync(path.resolve(process.cwd(), reportPath), reportDir)
}

const walkSync = function(dir, filelist = []) {
  const files = fs.readdirSync(dir)
  files.forEach(function(file) {
    if(fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist)
    }
    else {
      filelist.push(path.join(dir, file))
    }
  })
  return filelist
}

function getSuitFiles() {
  return walkSync(reportDir).filter((file) => file.includes('-suit.json'))
}


function mapStepsToRequiredData(steps, file) {
  const dir = path.dirname(file)
  return steps.map((step) => {
    const {title} = step
    const attachments = step.files.map((file) => {
      const ext = path.extname(path.resolve(dir, file))
      if(!fs.existsSync('./src/images')) {fs.mkdirSync('./src/images')}
      if(ext === '.png') {
        fs.createReadStream(path.resolve(dir, file)).pipe(
          fs.createWriteStream(path.resolve(__dirname, `./src/images/${file}`))
        )
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
  const {title, status, browser} = suitData

  const hooks = suitData.hooks.map(function(hook) {
    const {state, title, timeStart: start, timeEnd: end, duration} = hook
    const steps = mapStepsToRequiredData(hook.steps, file)

    return {
      title,
      start,
      state,
      end,
      duration,
      steps,
      errorStack: testStackIncludes.includes(state) ? hook.errorStack.stack : undefined
    }
  })

  const tests = suitData.tests.map(function(test) {
    const {title, timeStart: start, timeEnd: end, testOptions, state, duration} = test
    const steps = mapStepsToRequiredData(test.steps, file)
    return {
      title,
      start,
      state,
      end,
      duration,
      steps,
      testOptions,
      errorStack: testStackIncludes.includes(state) ? test.errorStack.stack : undefined
    }
  })

  return {title, status, hooks, tests, browser}
}

function putBaseFile() {
  const data = getSuitFiles().map((file) => {
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
    const {runName, opts, title} = JSON_DATA
    const suits = JSON_DATA.suits.map((suit) => getSuitToData(suit, file))
    return {title, stats, runName, suits, opts, dirDate: lastDir[lastDir.length - 1]}
  })
  if(fs.existsSync(path.resolve(__dirname, './src/reducers/base.json'))) {
    fs.unlinkSync(path.resolve(__dirname, './src/reducers/base.json'))
  }
  fs.writeFileSync(path.resolve(__dirname, './src/reducers/base.json'), JSON.stringify(getUniqMapWIthHistory(data)))
}

module.exports = {
  putBaseFile,
  executeCopyDir
}
