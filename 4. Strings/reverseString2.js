//https://leetcode.com/problems/reverse-string-ii/
//TC - O(n) | SC - O(n) for str to arr conversion

var reverseStr = function(s, k) {

    s = s.split('');

    for(let i = 0; i < s.length; i += 2*k){
        
        let left = i;
        
        //min to handle less than k chars
        let right = Math.min(i+k-1, s.length-1);

        while(left < right){
            [s[left], s[right]] = [s[right], s[left]];
            left++;
            right--;
        }
    }

    s = s.join('');

    return s;
};