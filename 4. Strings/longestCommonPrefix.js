//https://leetcode.com/problems/longest-common-prefix/description/

/*
better approach - sort & compare first & last string
TC - n log n * m
SC - O(1)
*/
var longestCommonPrefix = function(strs) {
    
    if(strs.length < 1)
        return '';

    strs.sort();

    let first = strs[0], last = strs[strs.length-1];
    let result = '';

    for(let i = 0; i < first.length; i++){
        if(first[i] == last[i])
            result += first[i];
        else
            break;
    }

    return result;
};


/*
optimal - compare character by character (column wise approach)
TC - O(n * m)
SC - O(1)
*/
var longestCommonPrefix = function(strs) {
    
    //smallest str in array
    let minLen = Math.min(...strs.map(s => s.length));

    let prefix = '';

    for(let pos = 0; pos < minLen; pos++){

        let current = strs[0][pos];
        
        for(let i = 1; i < strs.length; i++){
            if(strs[i][pos] !== current)
                return prefix;
        }

        prefix += current;
    }

    return prefix;
};