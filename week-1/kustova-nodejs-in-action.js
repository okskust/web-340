/*
============================================
; Title: Assignment 1.5
; Author: Professor Krasso
; Date: 15 August 2021
; Modified By: Oksana Kustova
; Description: This program demonstrates the
; building of a simple web server with Node.
;===========================================
*/

//Requires a http module and puts it in a http variable.
var http = require("http");

//Defines a function that will handle incoming HTTP requests.
function processRequest(req, res) {
  var body =
    "During this week we will be exploring the Node.js ecosystem, including asynchronous communications, models, and running our first Node server.";
  var contentLength = body.length;
  //Sends a response header to the request.
  res.writeHead(200, {
    "Content-Length": contentLength,
    "Content-Type": "text/plain",
  });
  //Signals to the server that all of the response headers and body have been sent.
  res.end(body);
}
//Creates a server that uses the function processRequest to handle requests.
var s = http.createServer(processRequest);
//Starts the server listening on port 3000.
s.listen(8080);
