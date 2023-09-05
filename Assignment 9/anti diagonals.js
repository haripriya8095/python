//Q2. Anti Diagonals

//Problem Description
//Give a N * N square matrix A, return an array of its anti-diagonals. Look at the example for more details.

//Input Format
//Only argument is a 2D array A of size N * N.


//Output Format
//Return a 2D integer array of size (2 * N-1) * N, representing the anti-diagonals of input array A.
//The vacant spaces in the grid should be assigned to 0.


//Example Input
//Input 1:
//1 2 3
//4 5 6
//7 8 9

//Input 2:

//1 2
//3 4

//Example Output
//Output 1:
//1 0 0
//2 4 0
//3 5 7
//6 8 0
//9 0 0

//Output 2:

//1 0
//2 3
//4 0

let ar = [[1, 2, 3],   
          [4, 5, 6],   
          [7, 8, 9]] 
let outar = []
for(let i=0; i<ar.length; i++)
 {
         let newar = []
         for(let j=0, k=i; j <= i && k >= 0; j++, k--)
         {
                 newar.push(ar[j][k])
         }
         outar.push(newar)
 }
 console.log(outar)
 for(let i=1; i < ar.length; i++)
 {
         let newar = []
         for(let j=ar.length-1, k=i; j >= i && k <= ar.length-1; j--,k++)
         {
                 newar.push(ar[k][j])
         }
         outar.push(newar)
 }
 console.log(outar)
 for(let i=0; i<outar.length; i++)
 {
         for(let j=0; j < ar.length; j++)
         {
                 if(outar[i][j] == null)
                 {
                         outar[i][j] = 0
                 }
         }
 }
 console.log(outar)
