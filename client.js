const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541// PORT number here,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: JMU");
    conn.write("Move: up");
  });
  conn.on('data', (data) => { // interpret incoming data as text
    console.log(data.toString());
    // conn.end()
  });
  conn.on("end", () => {
    console.log("Disconnected from server")
  });
};
  module.exports = connect;

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)