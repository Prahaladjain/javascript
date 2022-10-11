"use strict"
//This program is used to show different properties of date object

//Shows the current data and time
console.log("The current date is");
let now = new Date();
console.log(now);

console.log("Passing an argument to Date() object");

let jan01_1970 = new Date(0);
console.log(jan01_1970);
 //Adding 24 hrs

console.log("After adding the 24 hrs to the previous date");
let jan02_1970 = new Date("1970-01-02");
console.log(jan02_1970);

let precise_date = new Date(2011,0,6,11,50,56,899);
console.log(precise_date);
