//https://leetcode.com/problems/move-zeroes/description/

function moveZeroes(nums){

    if(nums.length <= 1)
        return nums;

    let i = 0, j = 0;
    while(j < nums.length){

        if(nums[j] != 0){
            [nums[i],nums[j]] = [nums[j],nums[i]];
            i++;
        }
        j++;
    }

    return nums;
}



let nums = [0,1,0,3,12];
console.log(moveZeroes(nums));

let nums2 = [0];
console.log(moveZeroes(nums2));