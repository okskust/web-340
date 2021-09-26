/*
============================================
; Title: Exercise 7.4
; Author: Professor Krasso
; Date: 25 September 2021
; Modified By: Oksana Kustova
; Description: The employee schema.
;===========================================
*/

// required
let mongoose = require("mongoose");
let Schema = mongoose.Schema;

// define the employeeSchema
let employeeSchema = new Schema({
  firstName: String,
  lastName: String,
});

// define the employee model
let Employee = mongoose.model("Employee", employeeSchema);

// expose the employee to calling files
module.exports = Employee;
