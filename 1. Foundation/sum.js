function sum(...args){
    let nums = [...args]
    let total = 0;

    if(nums.length == 0)
        return total;

    for(let i=0;i<nums.length;i++)
        total += nums[i];

    return total;
}

console.log(sum(1,2,3,10));