//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

function removeDuplicates(nums){

    let  k = 0, j = 1;
    while(j < nums.length){
        if(nums[k] !== nums[j]){
            k++;
            nums[k] = nums[j];
        }
        j++;
    }
    return k+1;
}


let arr = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(arr));