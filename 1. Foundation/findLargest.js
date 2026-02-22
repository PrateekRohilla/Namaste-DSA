//https://namastedev.com/practice/find-largest-number

function largest(num){
    if(num.length == 0)
        return null;

    let largest = num[0];
    for(let i=1;i<num.length;i++)
        if(num[i] > largest)
            largest = num[i];

    return largest;
}


let num = [-5,8,2,8,-3,2,7,2,-4];
console.log(largest(num));