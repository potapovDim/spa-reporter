":" //; exec /usr/bin/env node

const copyDir = require('copy-dir')
const path = require('path')
const fs = require('fs')
const reportDir = path.resolve(__dirname, './reporter')

function executeCopyDir(reportPath) {
  copyDir.sync(path.resolve(process.cwd(), reportPath), reportDir)
}

// fs.createReadStream('./package-lock.json').pipe(fs.createWriteStream('./src/images/newfile.json'));
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

function getSuitFiles() {
  return walkSync(reportDir).filter(function(file) {
    return file.includes('-suit.json')
  })
}

const testStackIncludes = ['failed', 'broken']

function getSuitToData(suitData, file) {
  const dir = path.dirname(file)
  const title = suitData.title
  const status = suitData.status
  const browser = suitData.browser

  const tests = suitData.tests.map(function(test) {
    const title = test.title
    const start = test.timeStart
    const end = test.timeEnd
    const state = test.state

    const duration = test.duration

    const steps = test.steps.map(function(step) {
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
    const result = {title, start, state, end, duration, steps, errorStack: testStackIncludes.includes(state) ? test.errorStack.stack : undefined}

    return result
  })
  return {title, status, tests, browser}
}

function putBaseFile() {
  const data = getSuitFiles().map(function(file) {
    const lastDir = path.dirname(file).split('/')
    const JSON_DATA = require(file)
    const stats = JSON_DATA.stats
    const opts = JSON_DATA.opts
    const title = JSON.title

    const suits = JSON_DATA.suits.map(function(suit) {
      return getSuitToData(suit, file)
    })
    return {stats, suits, opts, dirDate: lastDir[lastDir.length - 1]}
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
