//Q4. Matrix Multiplication

//Problem Description
//You are given two integer matrices A(having M X N size) and B(having N X P). You have to multiply matrix A with B and return the resultant matrix. (i.e. return the matrix AB).

//Input Format
//The first argument given is the 2-D integer matrix A.
//The second argument given is the 2-D integer matrix B.

//Output Format
//Return a 2D integer matrix denoting AB.

//Example Input
//Input 1:

//A = [[1, 2],
 //    [3, 4]]
//B = [[5, 6],
 //    [7, 8]]
//Input 2:

//A = [[1, 1]]
//B = [[2],
  //   [3]]

//Example Output
//Output 1:

// [[19, 22],
  //[43, 50]]
//Output 2:

 //[[5]]

 let A = [[1, 2],
    [3, 4]]
let B = [[5, 6],
     [7, 8]]
     let c=[]
for(let i=0;i<A.length;i++)
{
    newmat=[]
    for(let j=0;j<A.length;j++)
    {
        mul=0
        for(let k=0;k<B.length;k++)
        {
            mul+=A[i][k]*B[k][j]
        }
        newmat.push(mul)
    }
    c.push(newmat)
}
console.log(c)