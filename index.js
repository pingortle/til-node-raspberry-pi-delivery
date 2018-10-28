const micro = require('micro')
const hostname = require('./lib/hostname')

const port = process.env.PORT || 3000

const server = micro(async () => {
  return `
    <html>
      <head><meta charset="utf8"></head>
      <body>
        <p>😮 wow!</p>
        <p>👏 congrats!</p>
        <p>🎉 you're looking at your very own server, <strong><code>${await hostname()}</code></strong>!</p>
      </body>
    </html>
  `
})

server.listen(port)
console.log(`listening on localhost:${port}`)
