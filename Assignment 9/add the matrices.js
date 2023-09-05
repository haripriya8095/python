//Q1. Add the matrices

//Problem Description

//You are given two matrices A & B of same size, you have to return another matrix which is the sum of A and B.
//Note: Matrices are of same size means the number of rows and number of columns of both matrices are equal.
//The Following will give you an idea of matrix addition:

//Problem Constraints

//1 <= A.size(), B.size() <= 1000 1 <= A[i].size(), B[i].size() <= 1000 1 <= A[i][j], B[i][j] <= 1000
//Input Format

//The first argument is the 2D integer array A The second argument is the 2D integer array B
//Output Format

//You have to return a vector of vector of integers after doing required operations.
//Example Input

//Input 1:
//A = [[1, 2, 3],   
     //[4, 5, 6],   
     //[7, 8, 9]]  

//B = [[9, 8, 7],   
     //[6, 5, 4],   
     //[3, 2, 1]]
 
//Input 2:
//A = [[1, 2, 3],   
     //[4, 1, 2],   
     //[7, 8, 9]]  

//B = [[9, 9, 7],   
     //[1, 2, 4],   
     //[4, 6, 3]]
 
//Example Output

//Output 1:
//[[10, 10, 10],   
 //[10, 10, 10],   
 //[10, 10, 10]]
//Output 2:
//[[10, 11, 10],   
 //[5,   3,  6],   
 //[11, 14, 12]]

 let a=[[1,2,3],[4,1,2],[7,8,9]]
 let b=[[9,9,7],[1,2,4],[4,6,3]]
 let c=[]
 let newmat=[]
 for(let i=0;i<a.length;i++)
 {
     newmat=[]
     for(let j=0;j<a[0].length;j++)
     {
          newmat.push(a[i][j]+b[i][j])
     }
     c.push(newmat)
 }
console.log(c)