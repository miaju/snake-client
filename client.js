const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '10.0.0.164', // IP address here,
    port: 50541// PORT number here,
  });

  conn.on("connect", () => {
    console.log("Connected");
    conn.write("Name: MIA");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };