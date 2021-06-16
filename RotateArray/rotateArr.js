var rotate = function(nums, k) {
    // nums.splice()
};

nums = [1,2,3,4,5,6,7], k = 3

var temp = nums.splice((nums.length-k), k);
console.log(temp);
nums.unshift(...temp);
console.log(nums);
// rotate(nums, k);
// console.log(nums);