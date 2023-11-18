// /**
//  * @return {Function}
//  */
let createHelloWorld = function() {

    return function(...args) {
        return "Hello World";
    }
};

const a = createHelloWorld();

// /**
//  * const f = createHelloWorld();
//  * f(); // "Hello World"
//  */


// 2620. Counter
// Given an integer n, return a counter function.
// This counter function initially returns n and then returns
// 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
let createCounter = function (n) {
    let count = n;
    return function () {
        return count++;
    }
};

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2);
    arr.sort((a, b) => (a-b));
    let n = arr.length;
    if (n%2===0) {
        return ((arr[n/2] + arr[n/2-1])/2)
    } else {
        return arr[Math.floor(n/2)]
    }
};


// Longest Palindromic Substring
// /**
//  * @param {string} s
//  * @return {string}
//  */
var longestPalindrome = function(s) {
    if (s.length < 2) return s;
    let start = 0, maxLength = 1;
    function expand(left, right) {
        while(s[left] === s[right] && left>=0 && right < s.length)
        {
            if (right-left+1 > maxLength) {
                start = left;
                maxLength = right - left +1;
            }
            left -= 1;
            right += 1;
        }
    }
    for (let i=0; i<s.length; i+=1) {
        expand(i-1, i+1);
        expand(i, i+1);
    }
    return s.substring(start, start+maxLength)
};