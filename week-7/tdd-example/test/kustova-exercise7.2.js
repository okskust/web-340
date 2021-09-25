/*
============================================
; Title: Exercise 7.2
; Author: Professor Krasso
; Date: 25 September 2021
; Modified By: Oksana Kustova
; Description: TDD Example.
;===========================================
*/
let assert = require("assert");
describe('String#split', function() {
    it('should return an array of fruits', function() {
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
});