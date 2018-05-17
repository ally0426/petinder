const express = require("express");
cost bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const router = require("./controllers/burgers-controller.js")

const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Listening..");
});

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(router);


