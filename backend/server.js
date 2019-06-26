import WebSocket from 'ws'
import chalk from 'chalk'
import uuid from 'uuid/v4'

import { server } from '../common/consts'
import { ADD_FISHY } from '../common/events'
const { HOST, PORT, TICK_RATE, FRESH_FISH } = server

// FISHY MEMORY
let freshFishies = []
let stream = []

const realPort = process.env.PORT || PORT
const wss = new WebSocket.Server({ port: realPort, host: HOST })

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
  ws.send(formatFishies(freshFishies))

  // Recieving add fishy event
  ws.on('message', message => {
    if (message === ADD_FISHY) {
      const time = Date.now()
      const id = `${uuid()}`
      const fishyData = { id, time }

      // Add to stream and increment fishy total
      stream.push(fishyData)
      freshFishies.push(fishyData)

      console.log(`Adding 1 fishy boi, fishies are now at ${freshFishies.length}`)

      ws.send(formatFishies(freshFishies))
    }
  })
})

const broadcastLoop = () => {
  freshFishies = calculateFreshTotal()
  console.log(`Broadcasting to clients, fishies: ${freshFishies.length}`)
  broadcastFishies()
  setTimeout(broadcastLoop, TICK_RATE)
}

const broadcastFishies = () => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(formatFishies(freshFishies))
    }
  })
}

const calculateFreshTotal = () => {
  const timeNow = Date.now()
  const totalEvents = stream.filter(event => timeNow - event.time < FRESH_FISH)
  return totalEvents
}

const formatFishies = (fishies) => JSON.stringify(fishies)