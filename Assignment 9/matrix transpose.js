//Q6. Matrix Transpose

//Input Format
//First argument is a 2D matrix of integers.

//Output Format
//You have to return the Transpose of this 2D matrix.

//Example Input
//Input 1:

//A = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
//Input 2:

//A = [[1, 2],[1, 2],[1, 2]]

//Example Output
//Output 1:
//[[1, 4, 7], [2, 5, 8], [3, 6, 9]]
//Output 2:
//[[1, 1, 1], [2, 2, 2]]

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
console.log(arr1)
