const http = require('http')
const os = require('os')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    let nvers = 'Node version: ' + process.version
    let host = 'Host name: ' + os.hostname()
    res.end(`Hello from NodeJS\n${nvers}\n${host}`)
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
