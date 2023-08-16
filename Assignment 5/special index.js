//Q1. Special Index

//Problem Description
//Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.

//Problem Constraints
//1 <= n <= 10^5
//-10^5 <= A[i] <= 10^5

//Input Format
//First argument contains an array A of integers of size N

//Output Format
//Return the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.

//Example Input
//Input 1:
//A=[2, 1, 6, 4]
//Input 2:

//A=[1, 1, 1]

//Example Output
//Output 1:
//1
//Output 2:
//3

//Example Explanation
//Explanation 1:
//Removing arr[1] from the array modifies arr[] to { 2, 6, 4 } such that, arr[0] + arr[2] = arr[1]. 
//Therefore, the required output is 1. 
//Explanation 2:
//Removing arr[0] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
//Removing arr[1] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
//Removing arr[2] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
//Therefore, the required output is 3.

let arr=[1,1,1]
let sumeven=0,sumodd=0,count=0
for(let i=0;i<arr.length;i++)
{
    if(i%2==0)
    {
        sumeven+=arr[i]
    }
    else
    {
        sumodd+=arr[i]
    }
}
let newsumeven=0,newsumodd=0;
for(let i=0;i<arr.length;i++)
{
    if(i%2==0)
    {
        newsumeven=0
        newsumeven+=sumeven-arr[i]
        if(newsumeven==sumodd)
        {
            count++
        }
    }
    else
    {
        newsumodd=0
        newsumodd+=sumodd-arr[i]
        if(newsumodd==sumeven)
        {
            count++
        }

    }
}
console.log(count)