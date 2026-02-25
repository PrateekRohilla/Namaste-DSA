//https://leetcode.com/problems/max-consecutive-ones/description/

function MaxConsecutiveOnes(nums){

    if(nums.length == 1 && nums[0] == 1)
        return 1;
    
    else if(nums.length == 1)
        return 0;

    let maxOnes = 0
    let ones = 0;

    for(let i=0;i<nums.length;i++){
        if(nums[i] == 1){
            ones++;
            if(ones > maxOnes)
                maxOnes = ones;
        }
        else
            ones = 0;
    }
    
    return maxOnes;
}


let nums = [1,1,0,1,1,1];
console.log(MaxConsecutiveOnes(nums));