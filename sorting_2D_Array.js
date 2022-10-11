"use strict"
let n = Number(prompt("Enter the number of rows in an array",0));
let m = Number(prompt("Enter the  number of columns in an array",0));
let arr = new Array(n);
for(let i = 0 ; i < n ; i++) {
     arr[i] = new Array(m) ;
}

/*Taking inout from user */
for(let i = 0 ; i < n ; i++) {
    for(let k = 0 ; k < m ; k++) {
        arr[i][k] = Number(prompt("Enter the element ",0));
    }
}

/*Array before sorting */
document.write("2-d array before sorting the rows ------> ","<br>");

for(let i = 0 ; i < n ; i++) {
    for(let j = 0 ; j < m ; j++) {
        document.write(arr[i][j],"&nbsp");
    }
    document.write("<br>");
}

/*Sorting rows of array*/
for(let i = 0 ; i < n ; i++) {
    let temp = 0
    for(let j = 0 ; j < m -1 ; j++) {
        for(let k = j ; k < m ; k++) {
            if(arr[i][j] > arr[i][k]) {
                temp = arr[i][j];
                arr[i][j] = arr[i][k];
                arr[i][k] = temp;
            }
        }
    }
}

/*Printig 2-d array after sorting */
document.write("2-D array after sorting rows -----> ","<br>");

for(let i = 0 ; i < n ; i++) {
    for(let j = 0 ; j < m ; j++) {
        document.write(arr[i][j],"&nbsp");
    }
    document.write("<br>");
}
