let http = require("http");


const port = 8080;

function handleRequest(request, response) {
    var url = request.url;
    response.end("It works! The route: " + url);
}

let server = http.createServer(handleRequest);

server.listen(port, function() {
console.log(`The server is running on port ${port}`);
});

// https://localhost:8080