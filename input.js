// const connect = require("./client.js");
let connection;
  
  const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    }
    else if (key === 'o') { 
        connection.write("Move: up");
    }
    else if (key === 'k') {
        connection.write("Move: left");
    }
    else if (key === 'l') {
        connection.write("Move: down");  
    }
    else if (key === 'm') {
        connection.write("Move: right");
    }
    else if (key === 't') {
      connection.write("Say: Super cool!");
  }
  else if (key === 'g') {
    connection.write("Say: YUMMY!");
}
 
  };

  const setupInput =  (conn) => {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
  
    stdin.on("data", handleUserInput);
  
    return stdin;
    };

  module.exports = {setupInput};
  