//Implement array reversal. dont use builtin function
function arrayreversal(arr)
{
    let reversearray=[];
    for(i=arr.length-1;i>=0;i--)
    {
        reversearray.push(arr[i])
    }
    console.log(reversearray)
}
let arr=[1,2,3,4,5,6]
arrayreversal(arr)