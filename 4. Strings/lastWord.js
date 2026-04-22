//https://leetcode.com/problems/length-of-last-word/description/

//naive approach
var lengthOfLastWord = function(s) {

    let count = 0;

    for(let i=0;i<s.length;i++){
        if(s[i] != ' ')
            count++;
        else if((i+1) < s.length && s[i+1] != ' ')
            count = 0;
    }

    return count;
};



//better approach
var lengthOfLastWord = function(s) {
    
    // cut all side spaces
    s = s.trim();

    // find the index of the last space
    let lastSpaceIndex = s.lastIndexOf(' ');

    /* 
    subtract the index of space from the length of String s - 1
    to get the length of last word.

    Example: s = "Hello World" (length = 11), lastSpaceIndex = 5 -> 
    (11 - 5 - 1) = 5 
    */
    return s.length - lastSpaceIndex - 1;
};