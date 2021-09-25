/*
============================================
; Title: Exercise 7.3
; Author: Professor Krasso
; Date: 25 September 2021
; Modified By: Oksana Kustova
; Description: Chai example.
;===========================================
*/

let fruits = require('../kustova-fruits');
let chai = require('chai');
let assert = chai.assert;
describe('fruits', function () {
  it('should return an array of fruits', function () {
    let f = fruits('Apple,Orange,Mango');
    assert(Array.isArray(f));
  });
});
