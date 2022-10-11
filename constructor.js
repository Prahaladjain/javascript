function Person(name) {
   this.name = name;
   this.introduceself = function() {
     console.log(`Hi my name is ${this.name}`);
    }
}

const maqsood = new Person("Maqsood");
console.log(maqsood.name);
console.log(maqsood.introduceself());
