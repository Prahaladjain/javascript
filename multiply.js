const  numbers = [1,2,3,4,5,6]
function multiply(number,index) {
    console.log(`Number is ${number} and index is ${index}`);
  }

for(let i = 0 ; i < numbers.length - 1; i++) {
  multiply(numbers[i],i);
}
