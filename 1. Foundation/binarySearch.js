//https://leetcode.com/problems/binary-search/description/

function binarySearch(arr, target){

    let low = 0, high = arr.length-1;
    let mid;

    while(low <= high){
        
        mid = Math.floor((low+high)/2);

        if(arr[mid] == target)
            return mid;

        else if(arr[mid] < target)
            low = mid+1;

        else
            high = mid-1;
    }

    return -1;
}


let arr = [-1,0,3,5,9,12];
console.log(binarySearch(arr,5));