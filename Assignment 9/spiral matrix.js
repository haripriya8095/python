//Q7. Spiral Order Matrix II

//Problem Description
//Given an integer A, generate a square matrix filled with elements from 1 to A2 in spiral order and return the generated square matrix.
//Input Format
//First and only argument is integer A

//Output Format
//Return a 2-D matrix which consists of the elements added in spiral order.

//Example Input
//Input 1:
//1
//Input 2:
//2
//Input 3:
//5

//Example Output
//Output 1:

//[ [1] ]
//Output 2:

//[ [1, 2], 
 // [4, 3] ]
//Output 2:

//[ [1,   2,  3,  4, 5], 
//  [16, 17, 18, 19, 6], 
//  [15, 24, 25, 20, 7], 
//  [14, 23, 22, 21, 8], 
//  [13, 12, 11, 10, 9] ]

function spiralOrderMatrix(n) {
    const result = [];
    let counter=1, startRow=0, endRow=n-1, startCol=0, endCol = n-1;
    for(let i=0; i<n; i++) {
        result.push([]);
    }

   while(startRow<=endRow && startCol<=endCol) {
     //Top
     for(let i=startCol; i<=endCol; i++) {
        result[startRow][i] = counter;
        counter++;
    }
    startRow++;
    //Right
    for(let i=startRow; i<=endRow; i++) {
        result[i][endCol] = counter;
        counter++;
    }
    endCol--;
    //Bottom
    for(let i=endCol; i>=startCol; i--) {
        result[endRow][i] = counter;
        counter++;
    }
    endRow--;
    //Left
    for(let i=endRow; i>=startRow; i--) {
        result[i][startCol] = counter;
        counter++;
    }
    startCol++;
   }

    return result;
}

console.log(spiralOrderMatrix(6));
