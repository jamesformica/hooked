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
      ++fishies
      console.log(`Adding 1 fishy boi, fishies are now at ${fishies}`)

      ws.send(fishies);

      // We might need to debounce this to reduce overall load
      console.log(`Broadcasting to clients`)
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(fishies)
        }
      })
    }
  });
});