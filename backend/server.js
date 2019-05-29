const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 1019 });
console.log("starting server on https://localhost:1019")

wss.on('connection', function connection(ws, req) {
  const ip = req.connection.remoteAddress;

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  console.log(`Client connected from ${ip}`)

  ws.send('something');
});