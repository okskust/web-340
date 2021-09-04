/*
============================================
; Title: Exercise 4.2.
; Author: Professor Krasso
; Date: 4 September 2021
; Modified By: Oksana Kustova
; Description: JSON API.
;===========================================
*/

//Requires modules and puts it in the variables.
var express = require("express");
var http = require("http");

//Calls the express function to start a new Express application.
var app = express();

//Passes a parameter in the URL of the request.
app.get("/plants/:id", function (request, response) {
    var id = parseInt(request.params.id, 10);

    //Sent the result as JSON
    response.json({
        commonName: "lavender",
        scientificName: "lavandula",
        price: "$15",
        plantId: id
    });
});

//Starts the server.
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080");
});


