//https://leetcode.com/problems/missing-number/description/

function missingNumber(nums){

    if(nums.length == 1 && nums[0] == 0)
        return 1;
    
    if(nums.length == 1 && nums[0] == 1)
        return 0;
        
    let missingNum = -1;

    let n = nums.length;
    let sumNaturalNums = (n * (n+1))/2;

    let sumNumsArr = 0;
    for(let i = 0;i<nums.length;i++)
        sumNumsArr += nums[i];

    return sumNaturalNums - sumNumsArr;
}


let nums = [3,0,1];
let nums2 = [9,6,4,2,3,5,7,0,1];
let nums3 = [0];

console.log(missingNumber(nums));