let arr = [
      {
      name : ['Bob','smith'] ,
      age : 32,
      bio : function() {
                console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
           },
      introduceSelf : function() {
             console.log(`Hi I'M ${this.name[0]}.`);
           }, 
        },
     {
    name : ['MAqsood', 'Ahmad'],
    age : 33,
    bio : function () {
         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`)
        },
   introduceSelf : function() {
         console.log(`Hi I'M ${this.name[1]}.`);
     }
     }
   ]


console.log(arr[0].bio());
console.log(arr[0].introduceSelf());
console.log(arr[1].bio());
console.log(arr[1].introduceSelf());
           
