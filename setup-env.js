":" //; exec /usr/bin/env node --harmony "$0" "$@";

const { spawnSync, spawn } = require('child_process');
const path = require('path');

const matchFiles = (file, filePath) => {
  if (file.includes('.json')) {
    return {
      id: file.split('.')[0],
      type: 'json',
      content: require(`${filePath}/${file}`)
    }
  } else if (file.includes('.txt')) {
    return {
      id: file.split('.')[0],
      type: 'text',
      content: require('fs').readFileSync(`${filePath}/${file}`).toString('utf8')
    }
  } else {
    return {
      id: file.split('.')[0],
      type: 'img',
      content: file
    }
  }
}



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
    const insideDirFiles = spawnSync('ls', [
      `./spa-report/${subDir}`])
      .output
      .toString('utf8')
      .replace(/,/g, '')
      .replace(/\n/g, ' ')
      .split(' ');
    insideDirFiles.pop();
    jsonStruct[subDir] = require(`./spa-report/${subDir}/test.json`);

    const files = insideDirFiles.filter(file => file !== 'test.json').map(file => matchFiles(file, `./spa-report/${subDir}`))

    jsonStruct[subDir].suits.forEach(suit => {
      console.log('dsakdlasjdlkajsldlas')
      suit.tests.forEach(test => {
        test.files = test.files && test.files.length && test.files.map(fileId => {
          console.log('dsakdlasjdlkajsldlas')
          let file = null
          files.forEach(file => {
            if (file.id === fileId) {
              file = file
            }
          })
          return file
        })
        test.steps.forEach(step => {
          step.files = step.files && step.files.length && step.files.map(fileId => {
            let fileToReport = null
            files.forEach(file => {
              console.log(file.id, fileId)
              if (file.id === fileId) {
                console.log('!!!!!!!!!!!!!')
                fileToReport = file
              }
            })
            return fileToReport
          })
          console.log(step.files)
        })
      })
    })
  });


  fs.writeFile('./src/reducers/base.json', JSON.stringify(jsonStruct, null, '\t'), (err) => {
    if (err) throw err
  });
}




dirStructureToDefaultState()