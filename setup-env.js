":" //; exec /usr/bin/env node --harmony "$0" "$@";

const { spawnSync } = require('child_process');

console.log('!!!!!!', process.argv.slice(2))

const output = spawnSync('ls',['./'])
console.log(output.output.toString())






// const spawnProc = spawn('cp', [
//   '-r',
//   process.argv.slice(2)[0],
//   './'
// ])


// cp - r./SourceFolder./DestFolder