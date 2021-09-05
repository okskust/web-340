/*
============================================
; Title: Exercise 4.3.
; Author: Professor Krasso
; Date: 4 September 2021
; Modified By: Oksana Kustova
; Description: Status codes.
;===========================================
*/

//Requires modules and puts it in the variables.
var express = require("express");
var http = require("http");

//Calls the express function to start a new Express application.
var app = express();

//Setting the HTTP status code and sending error or message.
app.get("/forbidden", function(request, response) {
    response.status(403);
    response.json({
        error: "Forbidden: the server is rejecting to answer the request."
    })
});
app.get("/ok", function(request, response) {
    response.status(201);
    response.json({
        message: "The request has been fulfilled and a new resource is created."
    })
});
app.get("/server-error", function(request, response) {
    response.status(500);
    response.json({
        error: "Internal Server Error."
    })
});

//Starts the server.
http.createServer(app).listen(8080, function() {
   console.log("Application started on port 8080!");
});

