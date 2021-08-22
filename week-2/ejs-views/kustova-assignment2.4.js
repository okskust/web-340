/*
============================================
; Title: Assignment 2.4
; Author: Professor Krasso
; Date: 22 August 2021
; Modified By: Oksana Kustova
; Description: The EJS-Views app.
;===========================================
*/

//Requires modules and puts it in the variables.
var express = require("express");
var http = require("http");
var path = require("path");

//Calls the express function to start a new Express application.
var app = express();

//Tells Express that the views are in the views folder.
app.set("views", path.resolve(__dirname, "views"));

//Tells Express that the views will use the EJS engine.
app.set("view engine", "ejs");

//Called when a request to the root is made
app.get("/", function (request, response) {
  response.render("index", {
    firstName: "Oksana",
    lastName: "Kustova",
    address: "1000 Galvin Road South Bellevue, Nebraska 68005",
  });
});

//Starts the server.
http.createServer(app).listen(8080, function () {
  console.log("EJS-Views app started on port 8080.");
});
