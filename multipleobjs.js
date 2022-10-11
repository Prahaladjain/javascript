function createperson(name)
{
   const obj= {};
   obj.name = name,
   obj.introduceself = function(){
           console.log(`My name is ${this.name}`);
           }
  return obj;
}
  maqsood = createperson("maqsood");
  console.log(maqsood.name);
  console.log(maqsood.introduceself());
