const personPrototype = {
 greet() {
   console.log(`Hi my name is ${this.name}`);
   }
 }

function Person(name) {
   this.name = name ;
  }
 
Person.prototype = personPrototype;
Person.prototype.constructor = Person;

const maqsood = new Person("maqsood");
maqsood.greet();

const anmol = new Person("Anmol Sharma");
anmol.greet();

const anum = new Person("anma");

console.log(Object.hasOwn(irma,'name'));
console.log(Object.hasOwn(irma,'greet'));
