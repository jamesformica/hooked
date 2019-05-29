const WebSocket = require('ws')

const PORT = 1019
const HOST = `0.0.0.0`
const wss = new WebSocket.Server({ port: PORT, host: HOST })


wss.on('listening', () => {
  const { port, address } = wss.address();
  console.log(`starting server on https://${address}:${port}`)
})

wss.on('connection', (ws, req) => {
  const ip = req.connection.remoteAddress

  ws.on('message', message => {
    console.log('received: %s', message)
  });

  console.log(`client connected from ${ip}`)

  ws.send('something')
});