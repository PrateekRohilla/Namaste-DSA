//https://leetcode.com/problems/palindrome-number/

//helper function
function reverse(num){
    let rev = 0;
    while(num > 0){
        rev *= 10;
        let digit = num%10;
        rev += digit;
        num = Math.floor(num/10);
    }
    return rev;
}

function palindrome(num){

    if(num < 0)
        return false;

    if(num < 10)
        return true;

    let rev = reverse(num);
    if(rev == num)
        return true;

    return false;
}

let num = 121;
console.log(palindrome(num));