":" //; exec /usr/bin/env node --harmony "$0" "$@";

const { spawnSync, spawn } = require('child_process');
const path = require('path');

const outputInCurDir = spawnSync('ls', ['./']).output.toString('utf8');

if (outputInCurDir.includes('spa-report')) {
  const outputFromResourceDir = spawnSync('ls', [
    path.resolve(process.cwd(),
      process.argv.slice(2)[0])])
    .output
    .toString('utf8')
    .replace(/,/g, '')
    .replace(/\n/g, ' ')
    .split(' ')
  outputFromResourceDir.pop()
  outputFromResourceDir.forEach(subDir => {
    spawnSync('cp', [
      '-r',
      path.resolve(process.cwd(), process.argv.slice(2)[0].replace('/spa-report', `/spa-report/${subDir}`)),
      path.resolve(process.cwd(), './spa-report')
    ])
  })
} else {
  spawnSync('cp', [
    '-r',
    path.resolve(process.cwd(), process.argv.slice(2)[0]),
    path.resolve(process.cwd(), './')
  ])
}

const dirStructureToDefaultState = () => {
  const fs = require('fs');
  const structDir = spawnSync('ls', [
    './spa-report'])
    .output
    .toString('utf8')
    .replace(/,/g, '')
    .replace(/\n/g, ' ')
    .split(' ');
  structDir.pop();

  let jsonStruct = {};
  structDir.forEach((subDir) => {
    jsonStruct[subDir] = require(`./spa-report/${subDir}/test.json`);
    // if(subDir.tests.files) {
    //   subDir.tests.files.forEach((file) => {
    //     spawn('cp', [

    //     ])
    //   })
    // }
    // element.tests
  });

  fs.writeFile('./src/reducers/base.json', JSON.stringify(jsonStruct, null, '\t'), (err) => {
    if(err) throw err
  });
}




dirStructureToDefaultState()