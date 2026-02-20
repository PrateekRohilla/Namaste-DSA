//https://leetcode.com/problems/second-largest-digit-in-a-string/description/

function secondLargest(s){
    
    let large = '-1';
    let secLarge = '-1';

    for(let i=0;i<s.length;i++)
        if('0123456789'.includes(s[i])){
            if(s[i] > large){
                secLarge = large;
                large = s[i];
            }
            else if(s[i] < large && s[i] > secLarge)
                secLarge = s[i];
                
        }
            
    return Number(secLarge);
}



let str = 'dfa12321afd';
let str2 = 'abc1111';
let str3 = "ck077";
let str4 = 'sjhtz8344';
console.log(secondLargest(str4));