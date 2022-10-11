function myFunc2(name)
{
console.log("Inside my function 2");
console.log(name)
}

function myFunc(callBack) {
   console.log(callBack);
   callBack("Maqsood ahmad");
  }

myFunc(myFunc2);

