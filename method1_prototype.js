//prototype using Object.create() method
"using strict"
 const personPrototype = {
   greet() {
   console.log("Hello!");
   }
 }

const anam = Object.create(personPrototype);
anam.greet();

