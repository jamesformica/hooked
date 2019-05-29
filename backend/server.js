import WebSocket from 'ws'
import chalk from 'chalk'

import { server } from '../common/consts'
import { ADD_FISHY } from '../common/events'
const { HOST, PORT, TICK_RATE, FRESH_FISH } = server

// FISHY MEMORY
let freshFishies = []
let stream = []

const wss = new WebSocket.Server({ port: PORT, host: HOST })

// Server has started
wss.on('listening', () => {
  const { port, address } = wss.address()
  console.log(`Server running at ${chalk.bold.magenta(
    `http://${address || 'localhost'}:${port}`
  )}`)

  broadcastLoop()
})

wss.on('connection', (ws, req) => {
  const ip = req.connection.remoteAddress
  console.log(`client connected from ${ip}`)

  // On connection send fishy total
  ws.send(freshFishies)

  // Recieving add fishy event
  ws.on('message', message => {
    if (message === ADD_FISHY) {
      const timeStamp = Date.now()

      // Add to stream and increment fishy total 
      stream.push(timeStamp)
      freshFishies.push(timeStamp)

      console.log(`Adding 1 fishy boi, fishies are now at ${freshFishies.length}`)

      ws.send(freshFishies)
    }
  })
})

const broadcastLoop = () => {
  freshFishies = calculateFreshTotal()
  broadcastFishies()
  setTimeout(broadcastLoop, TICK_RATE)
}

const broadcastFishies = () => {
  console.log(`Broadcasting to clients`)
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(freshFishies)
    }
  })
}

const calculateFreshTotal = () => {
  const timeNow = Date.now()
  const totalEvents = stream.filter(event => timeNow - event < FRESH_FISH)
  return totalEvents
}