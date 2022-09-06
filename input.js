let connection;
const { keyInputs } = require("./constants");


// sends key input to the server if it is one of the key binded events
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  connection.write(keyInputs[key]);
};

// allows to take input from the user and hands it to handleUserInput
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };

