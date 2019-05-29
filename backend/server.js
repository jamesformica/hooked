import WebSocket from 'ws'
import chalk from 'chalk'

import { server } from '../common/consts'
import { ADD_FISHY } from '../common/events'
const { HOST, PORT } = server

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

    if (message === ADD_FISHY) {
      console.log('Adding 1 fishy boi')
      ++fishies
      ws.send(fishies)
    }
  });
});