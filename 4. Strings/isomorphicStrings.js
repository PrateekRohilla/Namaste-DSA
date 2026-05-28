//https://leetcode.com/problems/isomorphic-strings/

//using 2 Hashmap | TC - O(n), SC - O(256) or O(1)
var isIsomorphic = function(s, t) {

    let arr1 = new Array(256).fill(-1);
    let arr2 = new Array(256).fill(-1);

    let n = s.length;

    for(let i = 0; i < n; i++){

        let ch1 = s.charCodeAt(i);
        let ch2 = t.charCodeAt(i);

        if((arr1[ch1] != -1 && arr1[ch1] != ch2) || (arr2[ch2] != -1 && arr2[ch2] != ch1))
            return false;

        arr1[ch1] = ch2;
        arr2[ch2] = ch1;
    }

    return true;
};