//https://leetcode.com/problems/power-of-two/

function powerOfTwo(num){

    if(num == 1)
        return true;

    let i = 1;
    let calculatedVal = 2**i;
    while(calculatedVal <= num){
        if(calculatedVal == num)
            return true;
        i++;
        calculatedVal = 2**i;
    }

    return false;
}

function powerRecursive(n){
        if (n === 1) return true;

        if (n < 1 || n % 2 !== 0) 
            return false;

        return powerRecursive(n / 2);
}


/*
bitwise | one liner

In binary, powers of two have a distinctive property:
1. If n is a power of two, it contain exactly one bit set to 1
then, if we perform n−1, it will flip the n.
*/
const isPowerOfTwo = n => n > 0 && !(n & (n-1))




let num = 32;
console.log(powerOfTwo(num));
console.log(powerRecursive(num));
console.log(isPowerOfTwo(num));