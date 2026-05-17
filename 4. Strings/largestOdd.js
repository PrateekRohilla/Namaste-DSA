//https://leetcode.com/problems/largest-odd-number-in-string/description/

//sol1 - convert to number & process
var largestOddNumber = function(num) {
    
    let digits = Number(num);

    if(digits % 2 != 0)
        return num;

    let odd = 0;

    while(digits){
        if(digits % 2 != 0){
            odd = digits;
            return String(odd);
        }
        digits = Math.floor(digits/10);
    }
    
    return '';
};

//sol2 - can handle large nums | Leetcode AC
var largestOddNumber = function(num) {
    
    for(let i = num.length-1; i >= 0; i--){

        let digit = num[i];

        if(digit % 2 != 0)
            return num.slice(0, i+1);

    }

    return '';
};

let result = largestOddNumber('35427');
console.log(result);