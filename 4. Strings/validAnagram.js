//https://leetcode.com/problems/valid-anagram/description/

//naive approach sort & compare | TC - O(n log n), SC - O(n)
var isAnagram = function(s, t) {
    if(s.length != t.length)
        return false;

    let sArr = s.split('');
    let tArr = t.split('');

    sArr.sort();
    tArr.sort();

    for(let i=0;i<sArr.length;i++){
        if(sArr[i] != tArr[i])
            return false;
    }

    return true;
};

//optimal - using hashmap | TC - O(n), SC - O(26) or O(1)
var isAnagram = function(s, t) {

    if(s.length != t.length)
        return false;

    let freq = new Array(26).fill(0);

    //adding char count in hashmap using s
    for(const char of s){
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        freq[index]++;
    }

    //reducing char count using t
    for(const char of t){
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        freq[index]--;
    }

    //check for all char count to 0
    for(let i = 0; i < freq.length; i++)
        if(freq[i] != 0)
            return false;

    return true;
};