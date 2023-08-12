//Declare an array and sum of all values in an array using loops - for, while  — Use functions
//using for loop
function sum(arr)
{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i]
    }
    console.log(sum)
}
let arr=[1,2,3,4,5]
sum(arr)

//using while loop
function sum(array)
{
    let sum=0;
    let i=0
    while(i<array.length)
    {
        sum+=array[i]
        i++
    }
    console.log(sum)
}
let array=[2,2,3,4,5]
sum(array)