function myFunc () {
   function myFunc2 () {
        console.log("hello");
       }
   return myFunc2 ;

  }
const ans = myFunc();
//console.log(ans());//This line prints hello and undefined
 ans();//This prints hello only
  
