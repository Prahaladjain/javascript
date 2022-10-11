//Creating the nested object
let options= {
  size : {
    width :100,
    height: 200,
  },
  items :["cake", "Donut"],
  extra : true 
};

// Destructuring the object 

let {
   size : {
       width ,
       height,
       },
   items : [item1,item2],
   title = "Menu"
  } = options;

console.log(title);
console.log(width);
console.log(height);
console.log(item1);
console.log(item2);
