const net = require("net");
const connectinfo = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    connectinfo // host: 'localhost' --> IP address here, port: 50541 --> PORT number here,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: JMU");
    // conn.write("Move: up");

  });
  conn.on('data', (data) => { // interpret incoming data as text
    console.log(data.toString());
    // conn.end()
  });
  conn.on("end", () => {
    console.log("Disconnected from server")
  });
  return conn
};
  module.exports = connect;
