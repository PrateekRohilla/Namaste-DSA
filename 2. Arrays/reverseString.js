//https://leetcode.com/problems/reverse-string/description/

function reverseString(str){

    if(str.length <= 1)
        return str;

    let s = 0, e = str.length -1;

    while(s<e){
        [str[s],str[e]] = [str[e],str[s]];
        s++;
        e--;
    }

    return str;
}



let str = ['h','e','l','l','o'];
let str2 = ["H","a","n","n","a","h"];
console.log(reverseString(str2));