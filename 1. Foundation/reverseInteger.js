//https://leetcode.com/problems/reverse-integer/description/

//js specific approach - split then reverse, again join 
function reverseInteger(num){

    //handle -ve by taking abs value
    let absValue = Math.abs(num);

    //split & reverse
    let absRev = absValue.toString().split('').reverse().join('');

    //check for overflow
    if(absRev > 2**31)
        return 0;

    //check for sign
    //Math.sign(x) | return 1 for +ve val | return -1 -ve val
    return absRev * Math.sign(num);
}




let num1 = 123;
let num2 = -123;
let num3 = 120;

console.log(reverseInteger(num2));
