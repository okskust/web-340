/*
============================================
; Title: Exercise 2.3
; Author: Professor Krasso
; Date: 20 August 2021
; Modified By: Oksana Kustova
; Description: This program demonstrates the
; building of a simple web server with Espress.
;===========================================
*/

//Requires modules and puts it in the variables.
var express = require("express");
var http = require("http");

//Calls the express function to start a new Express application.
var app = express();

//Called when a request to the root is made
app.get("/", function (request, response) {
  response.end("Welcome to my homepage!");
});

//Called when a request to /about comes in
app.get("/about", function (request, response) {
  response.end("Welcome to the about page!");
});

//Called when a request to /contact comes in
app.get("/contact", function (request, response) {
  response.end("Welcome to the contact page!");
});

//Called when the others were missed
app.use(function (request, response) {
  response.statusCode = 404;
  response.end("404!");
});

//Starts the server.
http.createServer(app).listen(8080);
