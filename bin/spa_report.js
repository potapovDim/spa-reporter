#!/usr/bin/env node

const {putBaseFile, executeCopyDir} = require('../setup-env')
const argv = require('minimist')(process.argv.slice(2))
const {exec} = require('child_process')

if(argv.server) {
  executeCopyDir(argv.report)
  putBaseFile()
  const proc = exec(`
    cd ../ && npm run dev
  `)
  proc.on('error', console.error)
  proc.stderr.on('data', console.error)
} else if(argv.build) {
  executeCopyDir(argv.report)
  putBaseFile()
  const proc = exec(`
    cd ../ && npm run build
  `)
  proc.on('error', console.error)
  proc.stderr.on('data', console.error)
}
