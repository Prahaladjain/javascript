"use strict"
function myFunc() {
   return function () { // here we used the concept of function expression return acts as a variable that stores the value of function
     console.log("Hello");
    }
}
const ans = myFunc();
ans();
