const WebSocket = require('ws')

const PORT = 1019
const wss = new WebSocket.Server({ port: PORT })

console.log("starting server on https://localhost:1019")

wss.on('connection', (ws, req) => {
  const ip = req.connection.remoteAddress

  ws.on('message', message => {
    console.log('received: %s', message)
  });

  console.log(`client connected from ${ip}`)

  ws.send('something')
});