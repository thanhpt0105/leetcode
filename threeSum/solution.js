var threeSum = function(nums) {
    var results = [];
    nums = nums.sort((a,b) => a-b);
    var results = [];
    let i = 0;
    while(i < nums.length - 2) {
        if (nums[i] > 0) return results;
        let j = i+1;
        let k = nums.length - 1;
        while (j < k) {
            let threeSum = nums[i] + nums[j] + nums[k];
            if (threeSum > 0) {
                k--;
            } else if (threeSum < 0) {
                j++;
            } else if (threeSum === 0) {
                results.push([nums[i], nums[j], nums[k]]);
                // while(nums[--k] === nums[k+1]) {} 
                // while(nums[++j] === nums[j-1]) {}
                while(nums[k] === nums[k-1]) { k--;}
                while(nums[j] === nums[j+1]) { j++;}
                k--; j++;
            }
        }
        // while (nums[++i] === nums[i-1]){}
        while (nums[i] === nums[i+1]) {
            i++;
        }
        i++;
    }
    return results;
};

var threeSum2 = function(nums) {
    if (nums.length < 3) { 
        return [] 
    }
    
    nums.sort((a, b) => a - b)    
    let arr = []

    let startIndex = 0
    let endIndex = nums.length - 1
    let middleIndex = 1
    while (startIndex <= nums.length - 3) {
        if (nums[startIndex] > 0) {
            return arr
        }
        while(middleIndex < endIndex) {
            if (nums[startIndex] + nums[middleIndex] + nums[endIndex] === 0) {
                arr.push([nums[startIndex], nums[middleIndex], nums[endIndex]])
                while(nums[--endIndex] === nums[endIndex+1]) {} // we don't go out of range since i used --endIndex // may be a hacky way but i like it
                while(nums[++middleIndex] === nums[middleIndex-1]) {}
            } else if (nums[startIndex] + nums[middleIndex] + nums[endIndex] > 0) {
                endIndex--
            } else if (nums[startIndex] + nums[middleIndex] + nums[endIndex] < 0) {
                middleIndex++
            }
        }

        while(nums[++startIndex] === nums[startIndex-1]) {}
        
        middleIndex = startIndex+1
        endIndex = nums.length - 1
    }
    
    return arr
};

nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums));