var http = require("http");
function processRequest(req, res) {
var body = "During this week we will be exploring the Node.js ecosystem, including asynchronous communications, models, and running our first Node server.";
    var contentLength = body.length;
    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}
var s = http.createServer(processRequest);
s.listen(8080);