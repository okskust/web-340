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
let helmet = require("helmet");
let bodyParser = require("body-parser");
let cookieParser = require("cookie-parser");
let csrf = require("csurf");

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

//Sets up CSRF protection.
let csrfProtection = csrf({ cookie: true });

//Calls the express function to start a new Express application.
let app = express();

//Tells Express that the views are in the views folder.
app.set("views", path.resolve(__dirname, "views"));

//Tells Express that the views will use the EJS engine.
app.set("view engine", "ejs");
app.use(logger("short"));

// Helmet
app.use(helmet.xssFilter());

// Body parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Cookie parser
app.use(cookieParser());

// CSRF protection
app.use(csrfProtection);

//Intercepts all incoming requests and adds a CSRF token to the response.
app.use(function (request, response, next) {
  var token = request.csrfToken();
  response.cookie("XSRF-TOKEN", token);
  response.locals.csrfToken = token;
  next();
});

//Called when a request to the root is made
app.get("/", function (request, response) {
  response.render("index", {
    title: "Home page",
  });
});

//Redirects users to the 'new' page.
app.get("/new", function (request, response) {
  response.render("new", {
    title: "EMS | New",
  });
});

//Redirects users to the page with list of employees.
app.get("/list", function (request, response) {
  Employee.find({}, function (error, employees) {
    if (error) throw error;
    response.render("list", {
      title: "Employee List",
      employees: employees,
    });
  });
});

app.post("/process", function (request, response) {
  //console.log(request.body.txtFirstName);
  //console.log(request.body.txtLastName);
  if (!request.body.txtFirstName || !request.body.txtLastName) {
    response.status(400).send("Entries must have a first name and a last name");
    return;
  }

  // get the request's form data
  let firstName = request.body.txtFirstName;
  let lastName = request.body.txtLastName;
  console.log(firstName);
  console.log(lastName);

  // create a Employee model
  let employee = new Employee({
    firstName: firstName,
    lastName: lastName,
  });

  // save
  employee.save(function (err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(firstName + " " + lastName + " saved successfully!");
      response.redirect("/");
    }
  });
});

//Starts the server.
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});
