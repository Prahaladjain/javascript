const person = {
   name : {
      first:"maqsood",
      last:"Ahmad",
   },
  age:34,
  birthyear:2002,
  }
  
  person['age'] = 78;
  person['name']['last'] = "Tali";
  console.log(`The first name of person is ${person.name.first}`);
  console.log(`The last name of person is ${person.name.last}`);
  console.log(`Age of person is ${person.age}`);
  console.log(`Birth year of person is ${person.birthyear}`);
