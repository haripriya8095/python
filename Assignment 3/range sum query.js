//Q2. Range Sum Query

//Problem Description
//you are given an integer array A of length N.
//You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
//For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
//More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.

//Problem Constraints
//1 <= N, M <= 10^5
//1 <= A[i] <= 10^9
//0 <= L <= R < N

//Input Format
//The first argument is the integer array A.
//The second argument is the 2D integer array B.

//Output Format
//Return an integer array of length M where ith element is the answer for ith query in B.

//Example Input
//Input 1:
//A = [1, 2, 3, 4, 5]
//B = [[0, 3], [1, 2]]
//Input 2:

//A = [2, 2, 2]
//B = [[0, 0], [1, 2]]


//Example Output
//Output 1:
//[10, 5]
//Output 2:
//[2, 4]

let arr=[1,2,3,4,5,6]
let arr1=[[0,3],[1,2]]
let cumarr=[],sum=0
for(let i=0;i<arr.length;i++)
{
    sum+=arr[i]
    cumarr.push(sum)
}
let arr2=[]
for(let j=0;j<arr1.length;j++)
{
    if(arr1[j][0]!=0)
    {
        arr2.push(cumarr[arr1[j][1]]-cumarr[arr1[j][0]-1])
    }
    else
    {
        arr2.push(cumarr[arr1[j][1]])

    }
}
console.log(arr2)