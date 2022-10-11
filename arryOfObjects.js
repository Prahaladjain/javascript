"use strict"
let obj1 = {
    name:"maqsood",
    age: 23};
 let obj2 = {
    name: "Ankit",
    age:36};
    let obj3 = {
    name:"durgesh",
    age:46};
const arr = [ obj1,obj2,obj3 ]
//using arrow function
arr.forEach(obj => console.log(obj.name) );

