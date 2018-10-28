const { promisify } = require('util')
const { exec } = require('child_process')
const promiseExec = promisify(exec)

module.exports = async () => {
  return (await promiseExec('hostname')).stdout.trim()
}
