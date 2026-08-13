const dgram = require('dgram');

const server = dgram.createSocket('udp4');
const client = dgram.createSocket('udp4');

server.on('message', (msg) => {
  console.log('UDP string: ' + msg + '\n')
})

server.bind(1234, () => {

  // Getting the reference of server
  // by using ref() method
  const size = server.ref();

  // display the result
  console.log(size.eventNames());

});
