var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();
var PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Listening..");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect( (err) => {
  if(err) {
      console.error("erro connecting: " + err.stack);
      return;
  }
  console.log("connected as id" + connection.threadId);
});

