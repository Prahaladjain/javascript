"use strict"
let n = Number(prompt("Enter the number of elements in an array ",0));
let arr = [];
for(let i = 0 ; i < n ;i++)
{
    arr[i] = Number(prompt("Enter the data in an array",0));
}
document.write("Array before sorting----->");

for(let i = 0 ; i < n ; i++ )
{
document.write(arr[i],"&nbsp");    
}
document.write("<br>")

/*Sorting an array using  bubble sort*/
let temp = 0;
for(let i = 0 ; i < n-1 ;i++) {
    for(let j = i ; j < n ; j++) {
        if(arr[i]>arr[j]) {
            temp = arr[i] ;
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

/* After sorting an array*/
document.write("After sorting an array----->");

for(let k = 0 ; k < n ; k++)
{
    document.write(arr[k],"&nbsp");
}