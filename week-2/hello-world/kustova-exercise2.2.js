/*
============================================
; Title: Exercise 2.2
; Author: Professor Krasso
; Date: 15 August 2021
; Modified By: Oksana Kustova
; Description: This program demonstrates the
; building of a simple web server with Espress.
;===========================================
*/

//Requires the Express module and puts it in the express variable.
var express = require("express");

//Requires a http module and puts it in a http variable.
var http = require("http");

//Calls the express function to start a new Express application.
var app = express();

//Middleware
app.use(function (request, response) {
  console.log("In comes a request to: " + request.url);
  response.end("Hello, world!");
});

//Starts the server.
http.createServer(app).listen(8080);
