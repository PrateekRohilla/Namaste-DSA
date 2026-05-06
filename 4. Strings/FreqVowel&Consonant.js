//https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/description/

var maxFreqSum = function(s) {
    
    let maxVowelFreq = 0;
    let maxConsonantFreq = 0;

    const freq = new Array(26).fill(0);
    const vowels = new Set(['a','e','i','o','u']);

    for(const char of s){
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        freq[index]++;

        if(vowels.has(char))
            maxVowelFreq = Math.max(maxVowelFreq, freq[index]);
        else
            maxConsonantFreq = Math.max(maxConsonantFreq, freq[index]);
    }

    return maxVowelFreq + maxConsonantFreq;
};