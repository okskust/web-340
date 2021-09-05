/*
============================================
; Title: Assignment 4.4.
; Author: Professor Krasso
; Date: 4 September 2021
; Modified By: Oksana Kustova
; Description: Crud examples.
;===========================================
*/

//Requires modules and puts it in the variables.
var express = require("express");

//Calls the express function to start a new Express application.
var app = express();

//Handling different HTTP verbs.
app.get("/", function (request, response) {
    response.send("The HTTP GET method is used to **read** (or retrieve) a representation of a resource.")
});
app.post("/", function (request, response) {
    response.send("The POST verb is most-often utilized to **create** new resources. In particular, it's used to create subordinate resources.")
});
app.put("/", function (request, response) {
    response.send("PUT is most-often utilized for **update** capabilities.")
});
app.delete("/", function (request, response) {
    response.send("DELETE is pretty easy to understand. It is used to **delete** a resource identified by a URI.")
});

//Starts the server.
app.listen(8080, function() {
    console.log("Application is listening on port 8080");
});
