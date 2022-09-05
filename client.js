const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '10.0.0.164',
    port: 50541
  });

  conn.on("connect", () => {
    console.log("Connected");
    conn.write("Name: MIA");
  });

  conn.on("data", (data) => {
    console.log(data);
  });


  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };