//https://leetcode.com/problems/remove-element/description/

function removeElement(arr, val){

    let k = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== val){
            arr[k] = arr[i];
            k++
        }
    }

    return k;
}




let arr = [0,1,2,2,3,0,4,2];
console.log(removeElement(arr,2));