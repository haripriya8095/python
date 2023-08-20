//How to find out if the given two strings are anagrams or not?

let str1=("silent")
let str2=("listen")
let hm1={}, hm2={}
let flag=1
if(str1.length==str2.length)
{
    for(let i=0;i<str1.length;i++)
    {
        if(str1[i] in hm1)
        {
            hm1[str1[i]]+=1
        }
        else
        {
            hm1[str1[i]]=1
        }
        if(str2[i] in hm2)
        {
            hm2[str2[i]]+=1
        }
        else
        {
            hm2[str2[i]]=1
        }

    }
    for(let i=0;i<str1.length;i++)
    {
        if(hm1[str1[i]]!=hm2[str1[i]])
        {
            flag=0
        }
    }
}
else
{
    flag=0
}
if(flag==1)
    {
        console.log("anagrams")
    }
    else
    {
        console.log("not anagrams")
    }