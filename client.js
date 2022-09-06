const net = require("net");
const { IP, PORT, NAME } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("connect", () => {
    console.log("Connected");
    conn.write(NAME);
  });

  conn.on("data", (data) => {
    console.log(data);
  });


  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };