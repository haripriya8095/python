//Even Subarrays

//Problem Description
//You are given an integer array A.

//Decide whether it is possible to divide the array into one or more subarrays of even length such that the first and last element of all subarrays will be even.

//Return "YES" if it is possible; otherwise, return "NO" (without quotes).

//Problem Constraints
//1 <= |A|, A[i] <= 10^6

//Input Format
//The first and the only input argument is an integer array, A.

//Output Format
//Return a string "YES" or "NO" denoting the answer.

//Example Input
//Input 1:

 //A = [2, 4, 8, 6]
//Input 2:

 //A = [2, 4, 8, 7, 6]

//Example Output
//Output 1:

 //"YES"
//Output 2:

 //"NO"
//Example Explanation
//Explanation 1:

 //We can divide A into [2, 4] and [8, 6].
//Explanation 2:

 //There is no way to divide the array into even length subarrays.


 let a=[2,4,8,6]
let output=1
if(a.length%2==0)
{
    for(let i=0;i<a.length;i=i+2)
        {
            for(let j=i;j<=i+1;j++)
            {
                if(a[j]%2!=0)
                {
                    output=0
                }

            }
        }
}
else
{
    output=0
}

if(output==1)
{
    console.log("yes")
}
else
{
console.log("no")
}