const micro = require('micro')
const { promisify } = require('util')
const { exec } = require('child_process')
const promiseExec = promisify(exec)

const port = process.env.PORT || 3000

const server = micro(async () => {
  const host = (await promiseExec('hostname')).stdout.trim()
  return `<html><head><meta charset="utf8"></head><body><p>wow! congrats! you're looking at your very own host, ${host}! 🎉</p></body></html>`
})

server.listen(port)
console.log(`listening on localhost:${port}`)
