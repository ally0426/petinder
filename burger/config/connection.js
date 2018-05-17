const mysql = require("mysql");

let connection;

if(process.env.JAWSDB_URL) {
  connnection = mysql.createConnection(JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });
}

connection.connect( (err) => {
  if(err) {
      console.error("erro connecting: " + err.stack);
      return;
  }
  console.log("connected as id" + connection.threadId);
});

module.exports = connection;