//https://leetcode.com/problems/split-a-string-in-balanced-strings/

var balancedStringSplit = function(s) {
    
    let result = 0;
    let left = 0, right = 0;

    for(let i=0;i<s.length;i++){
        if(s[i] == 'L')
            left++
        else
            right++;
        
        if(left == right){
            result +=1;
            left = 0, right = 0;
        }
    }

    return result;
};