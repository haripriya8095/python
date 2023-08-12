//Declare an array and print all values in an array using loops - for, while — Use functions
//using for loop
function value(array)
{
    for(let i=0;i<array.length;i++)
    {
        console.log(array[i])
    }
}
let array=[12,3,4,15]
value(array)

//using while loop
function values(arrays)
{
    let i=0;
    while(i<arrays.length)
    {
        console.log(arrays[i])
        i++
    }
}
let arrays=[1,2,3,4,5]
values(arrays)