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

// 17. letter combinations of a phone number -Medium
// /**
//  * @param {string} digits
//  * @return {string[]}
//  */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    const map = {
        '2': 'abc', '3': 'def', '4': 'ghi',
        '5': 'jkl', '6': 'mno', '7': 'pqrs',
        '8': 'tuv', '9': 'wxyz'
    };
    const queue = [''];
    for (const digit of digits) {
        const len = queue.length;
        for (let i=0; i<len; i++) {
            const current = queue.shift()
            map[digit].split('').forEach(i => queue.push(current + i));
        }
    }
    return queue;
};

// 18. 4Sum -Medium
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[][]}
//  */

// Time: O(n^3)
// Space: 3Cn ??
var fourSum = function(nums, target) {
    const result = []

    if (nums.length < 4) return result

    // O(logN)
    nums.sort((a,b) => a - b)

    // O(n^3)
    for (let i = 0; i < nums.length - 3; i++) {
        // skip the same numbers
        if (nums[i] === nums[i - 1]) continue

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) continue

            let k = j + 1
            let l = nums.length - 1

            while (k < l) {
                const sum = nums[i] + nums[j] + nums[k] + nums[l]

                if (sum === target) {
                    result.push([nums[i], nums[j], nums[k], nums[l]])
                }

                if (sum <= target) {
                    k += 1
                    while (nums[k] === nums[k - 1]) {
                        k += 1
                    }
                }

                if (sum >= target) {
                    l -= 1
                    while (nums[l] === nums[l + 1]) {
                        l -= 1
                    }
                }
            }
        }
    }

    return result
};