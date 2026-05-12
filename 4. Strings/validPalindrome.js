//https://leetcode.com/problems/valid-palindrome/description/

var isPalindrome = function(s) {

    s = s.toLowerCase().split('');

    let palindrome = '';

    for(let i=0; i<s.length; i++)
        if('abcdefghijklmnopqrstuvwxyz0123456789'.includes(s[i]))
            palindrome += s[i];

    let left = 0, right = palindrome.length-1;
    
    while(left < right){
        if(palindrome[left] != palindrome[right])
            return false;
        
        left++;
        right--;
    }

    return true;
};