//How do you calculate the number of vowels and consonants in a String?

let a="haripriya"
let vowel_count=0
let consonants_count=0
for(let i=0;i<a.length;i++)
{
    if(a[i]=="A"||a[i]=="E"||a[i]=="I"||a[i]=="O"||a[i]=="U"||a[i]=="a"||a[i]=="e"||a[i]=="i"||a[i]=="o"||a[i]=="u")
    vowel_count++
else
consonants_count++
}
console.log(vowel_count)
console.log(consonants_count)