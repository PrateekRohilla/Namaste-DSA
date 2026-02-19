//https://namastedev.com/practice/find-smallest-number

function findSmallest(arr){
    if(arr.length == 0)
        return null;

    let smallest = 99999;
    
    for(let i=0;i<arr.length;i++)
        if(arr[i] < smallest)
            smallest = arr[i];

    return smallest;
}


let arr = [8,2,3,0,4,8,7];
console.log(findSmallest(arr));