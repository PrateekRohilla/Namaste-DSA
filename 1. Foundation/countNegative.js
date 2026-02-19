//https://namastedev.com/practice/count-negative

function countNegative(arr){

    if(arr.length == 0)
        return 0;

    let negatives = 0;

    for(let i=0;i<arr.length;i++)
        if(arr[i] < 0)
            negatives++;

    return negatives;
}



let arr = [-5,8,-9,5,-2,3,9,-5];
let arr2 = [8,2,3,95];
let arr3 = [];

console.log(countNegative(arr2));