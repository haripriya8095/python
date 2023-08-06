//Implement string reversal. dont use builtin function
function reversestring(str)
{
    let newstring=" "
    for(let i=str.length-1;i>=0;i--)
    {
        newstring+=str[i]
    }
    console.log(newstring)
}
let str="abcdef"
reversestring(str)