const WebSocket = require('ws')
const chalk = require('chalk');

//  SERVER CONSTS
const PORT = 1019
const HOST = `0.0.0.0`

// EVENT CONSTS
const addFishy = 'addFishy'

// FISHY MEMORY
let fishies = 0

const wss = new WebSocket.Server({ port: PORT, host: HOST })

wss.on('listening', () => {
  const { port, address } = wss.address();
  console.log(`Server running at ${chalk.bold.magenta(
    `http://${address || 'localhost'}:${port}`
  )}`)
})

wss.on('connection', (ws, req) => {
  const ip = req.connection.remoteAddress
  console.log(`client connected from ${ip}`)

  ws.send(fishies);

  ws.on('message', message => {
    console.log('received: %s', message)

    if (message === addFishy) {
      console.lo('Adding 1 fishy boi')
      ++fishies
      ws.send(fishies)
    }
  });
});