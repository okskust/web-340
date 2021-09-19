/*
============================================
; Title: Exercise 6.3
; Author: Professor Krasso
; Date: 18 September 2021
; Modified By: Oksana Kustova
; Description: Mongoose.
;===========================================
*/

//Requires modules and puts it in the variables.
let express = require("express");
let mongoose = require("mongoose");
let http = require("http");
var logger = require("morgan");

//Specify DB connection
let mongoDB =
  "mongodb+srv://admin:8520@kustova-ems.l7lk1.mongodb.net/kustova-ems?retryWrites=true&w=majority";

mongoose.connect(mongoDB, {
  useMongoClient: true,
});

mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once("open", function () {
  console.log("Application connected to Atlas MongoDB instance");
});

//Calls the express function to start a new Express application.
var app = express();
app.use(logger("dev"));

//Starts the server.
http.createServer(app).listen(5000, function () {
  console.log("Application started on port 5000.");
});
