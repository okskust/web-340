/*
============================================
; Title: Exercise 3.3
; Author: Professor Krasso
; Date: 27 August 2021
; Modified By: Oksana Kustova
; Description: Advanced Pouting.
;===========================================
*/

//Requires modules and puts it in the variables.
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

//Calls the express function to start a new Express application.
var app = express();

//Tells Express that the views are in the views folder.
app.set("views", path.resolve(__dirname, "views"));

//Tells Express that the views will use the EJS engine.
app.set("view engine", "ejs");

app.use(logger("short"));

//Called when a request to the root is made
app.get("/:employeeId", function (request, response) {
    var employeeId = parseInt(request.params.employeeId, 10);
  response.render("index", {
    employeeId: employeeId
  });
});

//Starts the server.
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080.");
});