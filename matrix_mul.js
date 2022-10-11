"use strict"
let n = Number(prompt("Enter the number of rows for matrix 1",0));
let m = Number(prompt("Enter the number of columns for matrix 2",0));
let p = Number(prompt("Enter the number of rows for matrix 2",0));
let q = Number(prompt("Enter the number of columns for matrix 2"));
if(m!=p)
{
    document.write("Multiplication of mateices not possible rows and columns must be sane ");
    
} else {

/*Taking input into an matrix 1*/ 
let Matrix_1 = [[],[]];
for(let i = 0 ; i < n ; i++) {
    for(let j = 0 ; j < m ; j++) {
        Matrix_1[i][j]= parseInt(prompt("Enter the element in first Matrix ", 0));
    }
}

/*Takingn input into an MAtrix 2 */

let Matrix_2 = [[],[]];
for(let i = 0 ; i < p ; i++) {
    for(let j = 0 ; j < q ; j++) {
        Matrix_2[i][j] = Number(prompt("Enter the element in an array",0));
    }
}

/*Matrix multiplication */
let mult_matrix = [[],[]];

for(let i = 0 ; i < n ; i++) {
    for(let j = 0 ; j < q ; j++) {
        mult_matrix[i][j] = 0;
        for(let k = 0 ; k < m ; k++)
        {
            mult_matrix[i][j] += Matrix_1[i][k]*Matrix_2[k][j];
        }
    }
}

/* Printing Matrix 1 */
document.write("---------------------------Matrix 1------------------","<br>");
for(let i = 0 ; i < n ; i++) {
    for(let j = 0 ; j < m ; j++) {
        document.write(Matrix_1[i][j]+"\t"+"\t"+"\t");
    }
    document.write("<br>");
}

/*Printing the elements of matrix 2*/
document.write("<br>","--------------------Matrix 2------------------------","<br>");
for(let i = 0 ; i < p ; i++) {
    for(let j = 0 ; j < q ; j++) {
        document.write(Matrix_2[i][j],"&nbsp");
    }
    document.write("<br>");
}

/*Printing the multiplication of the matrix */
document.write("---------------Multiplication of matrices is -------------------","<br>");
for(let i = 0 ; i < n ; i++) {
    for(let j = 0 ; j < q ; j++) {
       document.write(mult_matrix[i][j],"&nbsp");
    }
    document.write("<br>");
}
 }