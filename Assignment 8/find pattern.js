//Substring search - Given a string, find the pattern provide by user? if yes, print the index of the substring else print -1

let s=("geeksforgeeks")
let p=("geeks")
let flag
let flag2=1
for(let i=0; i< s.length; i++)
 {
    if(s[i] == p[0])
     {
        flag = 1
         for(let j=i+1, k=1; j< i+ (p.length) && k<=p.length; j++, k++)
         {
             if(s[j] != p[k])
             {
                 flag = 0
             }
         }
         if(flag == 1)
         {
             flag2 = 0
             console.log(i)
        }
     }
 }
 if(flag2 == 1)
 {
     console.log(-1)
 }

