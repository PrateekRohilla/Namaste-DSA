//https://leetcode.com/problems/single-number/description/

function singleNumber(nums){

    if(nums.length == 1)
        return nums[0];

    let singleNum = nums[0];

    for(let i=1;i<nums.length;i++)
        singleNum = singleNum ^ nums[i];

    return singleNum;
}


let nums = [2,2,1];
let nums2 = [4,1,2,1,2];
let nums3 = [1];

console.log(singleNumber(nums2));