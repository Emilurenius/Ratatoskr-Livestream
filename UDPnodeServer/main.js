import express from 'express'
import { createServer } from "http"
import { WebSocketServer } from "ws"

import dgram from 'dgram'

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });
const port = 3001

wss.broadcast = (msg) => {
  console.log(msg)
  wss.clients.forEach(function each(client)  {
    client.send(msg)
  })
}

const UDPserver = dgram.createSocket('udp4');

UDPserver.on('message', (msg) => {
  console.log('UDP string: ' + msg + '\n')
  wss.broadcast(msg)
})

UDPserver.bind(1234, () => {

  // Getting the reference of server
  // by using ref() method
  const size = UDPserver.ref();

  // display the result
  console.log(size.eventNames());

});

wss.on("connection", (ws) => {
  console.log("New client connected")

  ws.on("message", (data) => {
    const messageText = data.toString()
    console.log(`Recieved: ${messageText}`)
  })

  ws.on("close", () => {
    console.log("Client disconnected")
  })
})

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
