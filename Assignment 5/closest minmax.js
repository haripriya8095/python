//Closest MinMax

//Problem Description
//Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array
//and at least one occurrence of the minimum value of the array.

//Problem Constraints
//1 <= |A| <= 2000

//Input Format
//First and only argument is vector A

//Output Format
//Return the length of the smallest subarray which has at least one occurrence of minimum and maximum element of the array

//Example Input
//Input 1:
//A = [1, 3, 2]
//Input 2:
//A = [2, 6, 1, 6, 9]

//Example Output
//Output 1:
 //2
//Output 2:
 //3

//Example Explanation

//Explanation 1:
 //Take the 1st and 2nd elements as they are the minimum and maximum elements respectievly.

//Explanation 2:
 //Take the last 3 elements of the array.

 let A=[2,6,1,6,9]
 let l=A[0]
 let s=A[0]
 let b=[]
 for(let i=1;i<A.length;i++)
 {
    if(l<A[i])
    {
        l=A[i]
    }
    if(s>A[i])
    {
        s=A[i]
    }
 }
 for(let i=0;i<A.length;i++)
 {
    if(A[i]==l)
    {
        for(let j=i+1;j<A.length;j++)
        {
            if(A[j]==s)
            {
                b.push((j-i)+1)
            }
        }
    }
 if(A[i]==s)
    {
        for(let j=i+1;j<A.length;j++)
        {
            if(A[j]==l)
            {
                b.push((j-i)+1)
            }
        }
    }
 }
smallindex=b[0]
for(let i=0;i<b.length;i++)
{
    if(b[i<smallindex])
    {
        smallindex=b[i]
    }
}
console.log(smallindex)