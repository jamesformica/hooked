const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 1019 });
console.log("starting server on https://localhost:1019")

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});