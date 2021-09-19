/*
============================================
; Title: Assignment 5.4
; Author: Professor Krasso
; Date: 10 September 2021
; Modified By: Oksana Kustova
; Description: Employee Management System.
;===========================================
*/
//Requires modules and puts it in the variables.
let express = require("express");
let http = require("http");
let path = require("path");
let logger = require("morgan");

//Calls the express function to start a new Express application.
let app = express();

//Tells Express that the views are in the views folder.
app.set("views", path.resolve(__dirname, "views"));

//Tells Express that the views will use the EJS engine.
app.set("view engine", "ejs");
app.use(logger("short"));

//Called when a request to the root is made
app.get("/", function (request, response) {
  response.render("index", {
    title: "Home page",
  });
});

//Starts the server.
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});
