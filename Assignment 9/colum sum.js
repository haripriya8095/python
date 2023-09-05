//Q3. Column Sum

//Problem Description
//You are given a 2D integer matrix A, return a 1D integer array containing column-wise sums of original matrix.
//Input Format
//First argument is a 2D array of integers.(2D matrix).

//Output Format
//Return an array containing column-wise sums of original matrix.

//Example Input
//Input 1:

//[1,2,3,4]
//[5,6,7,8]
//[9,2,3,4]

//Example Output
//Output 1:
//{15,10,13,16}


let ar=[[1,2,3,4],[5,6,7,8],[9,2,3,4]]
let sum=0
for(let i=0;i<ar[0].length;i++)
{
    sum=0
    for(let j=0;j<ar.length;j++)
    {
        sum+=ar[j][i]
    }
    console.log(sum)
}