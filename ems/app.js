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
let mongoose = require("mongoose");
let Employee = require("./models/employee");

//MongoDB connection
let mongoDB =
  "mongodb+srv://admin:8520@kustova-ems.l7lk1.mongodb.net/kustova-ems?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
  useMongoClient: true,
});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function () {
  console.log("Application connected to mLab MongoDB instance");
});

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
