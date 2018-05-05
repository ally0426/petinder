let http = require("http");

var quoteList = ["You look nice today", "You can have a day off", "Did you lose weight?"];

const port = 7000;
function good_comment(request, response) {
    let url = request.url;
    var randomNum = Math.floor(Math.random() * 3) + 1
    // console.log(randomNum, typeof(randomNum));
    response.end(quoteList[randomNum]);
}

let server = http.createServer(good_comment);

server.listen(port, function() {
  console.log(`The server is running on port ${port}`);
});

