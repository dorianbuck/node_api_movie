const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws, req) {
  ws.on('message', function incoming(message) {
    console.log(`Received: ${message}`); // this will output the incoming message in logs
  });
  ws.send(`You are connected`); // this will send a message whenewer a new client connects
});

module.exports = { wss, WebSocket }