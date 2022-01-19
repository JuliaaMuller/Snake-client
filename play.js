const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541// PORT number here,
  });
  conn.on("connect", () => {
    console.log("Hi you are connected")
  });
  conn.on('data', (data) => { // interpret incoming data as text
    console.log(data.toString());
    // conn.end()
  });
  conn.on("end", () => {
    console.log("Disconnected from server")
  });
  
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();