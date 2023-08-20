//1. Determine if a string/number is a palindrome?

function checkPalindrome(string) 
{
    let len = string.length;

    for (let i = 0; i < len / 2; i++)
     {

        if (string[i] !== string[len - 1 - i]) 
        {
            return 'It is not a palindrome';
        }
        else
        {
            return 'It is a palindrome';
        }
    }
    
}
let string="xyq"
console.log(checkPalindrome(string))
