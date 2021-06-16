var maxSubArray = function(nums) {
    var sum = 0;
    var maxSum = nums[0];
    for(let i = 0;i<nums.length;i++){
        sum += nums[i];
        if(sum > maxSum) maxSum = sum;
        if(sum < 0) sum = 0;
    }
    return maxSum;
};

nums = [-2,1,-3,4,-1,2,1,-5,4];
nums2 = [5,4,-1,7,8]
max = maxSubArray(nums);
max2 = maxSubArray(nums2);

nums3 = [-2,-1,-3,-4,-1,-2,-1,-5,-4];
max3 = maxSubArray(nums3);

console.log(max);
console.log(max2);
console.log(max3);