"use strict"
const myDate = Date(1990,12,19);
alert(myDate.getYear());
myDate.getYear = function() {
  alert('something else');
};
let obj = myDate.getYear();
console.log(obj);
