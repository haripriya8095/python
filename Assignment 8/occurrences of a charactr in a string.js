//Find the number of occurrences of a character in a String?

function count(str,c)
{
    let count=0
    for(let i=0;i<str.length;i++)
    {
        if(str[i]==c)
        count++
    }
    console.log(count)
}
let str="haripriya"
let c='a'
count(str,c)