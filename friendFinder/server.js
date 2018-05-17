const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, "../public")));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log(`The server is starting on port ${PORT}`);
});
