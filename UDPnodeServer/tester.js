const dgram = require('dgram');

const client = dgram.createSocket('udp4');

// Client sending message to server
// by using send() method
client.send("v:0222", 0, 6, 1234, "localhost", (err) => {

  if (err) throw err;
  console.log("message sent");
});
