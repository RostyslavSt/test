const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3003});

server.on('connection', ws => {
    ws.send('welcome')
})