// 15. 3Sum -Medium
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        const target = 0 - nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        while (right > left) {
            const sum = nums[left] + nums[right];
            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }
        }
    }

    return result;
};

// 16. 3sum closest -Medium
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let ans = nums[0]+nums[1]+nums[2];
    for (let i = 0; i < nums.length-2; i+=1) {
        let start = i + 1, end = nums.length-1;
        while (start < end) {
            const sum = nums[i]+nums[start]+nums[end];
            if (sum > target) {
                end -= 1;
            } else {
                start += 1;
            }
            if (Math.abs(target-sum) < Math.abs(target-ans)) {
                ans = sum;
            }
        }
    }
    return ans;
};