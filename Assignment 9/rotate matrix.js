//Q8. Rotate Matrix

//Problem Description
//You are given a n x n 2D matrix A representing an image.
//Input Format
//First argument is a 2D matrix A of integers

//Output Format
//Return the 2D rotated matrix.

//Example Input
//Input 1:
 //[
   // [1, 2],
    //[3, 4]
 //]
//Input 2:

// [
  //  [1, 2, 3],
    //[4, 5, 6],
    //[7, 8, 9]
 //]

//Example Output
//Output 1:

 //[
   // [3, 1],
    //[4, 2]
// ]
//Output 2:

 //[
   // [7, 4, 1],
    //[8, 5, 2],
   // [9, 6, 3]
 //]

 let arr=[[1,2,3],[4,5,6],[7,8,9]]
let arr1=[]
for(let i=0;i<arr[0].length;i++)
{
    newmat=[]
    for(let j=0;j<arr.length;j++)
    {
        newmat.push(arr[j][i])
    }
    arr1.push(newmat)
}
for(let i=0;i<arr1.length;i++)
{
  for(let j=0;j<arr1.length/2;j++)
{
    let temp=arr1[i][j]
    arr1[i][j]=arr1[i][arr1.length-j-1]
    arr1[i][arr1.length-j-1]=temp
}
}
console.log(arr1)
