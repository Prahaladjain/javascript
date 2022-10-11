const number  = [1,2,3,4,5];
function num(number) {
    return number % 2 == 0 ;
 }

const ans =  number.filter(num);
console.log(ans);
