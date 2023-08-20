//How do you reverse an array?

let arr=[2,4,5,6,7]
let rev_arr=[]
for(let i=arr.length-1;i>=0;i--)
{
    rev_arr.push(arr[i])
}
console.log(rev_arr)