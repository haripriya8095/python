//Q1:  equilibrium
//Problem Description
//You are given an array A of integers of size N.

//Your task is to find the equilibrium index of the given array

//The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.

//If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.

//Note:

//Array indexing starts from 0.
//If there is no equilibrium index then return -1.
//If there are more than one equilibrium indexes then return the minimum index.

//constraints:

//1 <= N <= 10^5
//-10^5 <= A[i] <= 10^5
//--------------------------------------------------------------------------------------------------------

//eg:

//Example Input
//Input 1:
//A = [-7, 1, 5, 2, -4, 3, 0]
//Input 2:

//A = [1, 2, 3]


//Example Output
//Output 1:
//3
//Output 2:

//-1

function equilibrium(arr)
{
    let leftsum,rightsum
    for(let i=0;i<arr.length;i++)
    {
        leftsum=0;
        for(let j=0;j<i;j++)
        leftsum+=arr[j]

        rightsum=0;
        for(let j=i+1;j<arr.length;j++)
        rightsum+=arr[j]

    if(leftsum==rightsum)
    return i;
    }
}

let arr=[-7, 1, 5, 2, -4, 3, 0]
equilibrium(arr)
console.log(equilibrium(arr))