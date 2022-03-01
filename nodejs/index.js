const http = require('http')
const os = require('os')

const port = 8080

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    let nvers = 'Node version: ' + process.version
    let host = 'Host name: ' + os.hostname()
    res.end(`Hello from NodeJS\n${nvers}\n${host}`)
})

server.listen(port, () => {
    console.log(`Server running at http://${os.hostname()}:${port}/`)
})
