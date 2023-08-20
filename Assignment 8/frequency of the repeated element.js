//How do you get the matching elements(repeated array value) in an integer array? Also, find the frequency of the repeated element?

let A = [5,3,6,4,5,4,6,2,6,1,3,5]
 let HM = {}
 let repeatedarr = []
let uniquearr = []
for(let i=0; i< A.length; i++)
 {
   if(A[i] in HM)
     {
         HM[A[i]] += 1
     }
     else
    {
       HM[A[i]] = 1
    }
 }
  uniquearr = Object.keys(HM)
for(let i=0; i< uniquearr.length; i++)
{
   if(HM[uniquearr[i]] != 1)
     {
        console.log("frequnecy of ",uniquearr[i],"is ",HM[uniquearr[i]])
        repeatedarr.push(uniquearr[i])
     }
 }
 console.log("the repeated values are: ",repeatedarr)