// LeetCode tasks
// 1. Two Sum -Easy
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// /**
//  nums = [1, 5, 9];
//  target = 10
//  [0,2]
//
//  i = 1
//  j = 2
//
//  if(i != j) continue
//  */

var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

// 2. Add Two Numbers -Medium
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let prevNode = new ListNode();
    const headNode = prevNode;
    while(l1 || l2 || carry) {
        let val1 = 0;
        let val2 = 0;
        if (l1) {
            val1 = l1.val;
            l1 = l1.next;
        }
        if(l2) {
            val2 = l2.val
            l2 = l2.next;
        }

        const sum = val1 + val2 + carry;
        carry = Math.floor(sum/10);
        const digit = sum % 10;
        const currentNode = new ListNode(digit);
        prevNode.next = currentNode;
        prevNode = currentNode;
    }

    return headNode.next;
};

// 3. Longest Substring Without Repeating Characters -Medium
// /**
//  * @param {string} s
//  * @return {number}
//  */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) return s.length
    const map = {};
    let front = 0, back = 0, maxLength = 0;
    for(;front < s.length; front+=1) {
        const exist = map[s[front]];
        if (exist !== undefined && back <= exist) {
            back = exist+1;
        }
        map[s[front]] = front;
        maxLength = Math.max(front-back+1, maxLength);
    }
    return maxLength;
};

// 5. Longest Palindromic Substring -Medium
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

// 6. Zigzag conversion -Medium
// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */
var convert = function(s, numRows) {
    if(numRows == 1) return s;
    let n = s.length;
    let charsInSection = numRows*2-2;
    let result = '';

    for (let row = 0; row < numRows; row++){
        let i = row;
        while (i < n ) {
            result += s[i]
            if (row != 0 && row != numRows - 1){
                let charsInBetween = charsInSection - 2 * row
                let secondIndex =  i + charsInBetween
                if (secondIndex < n) result += s[secondIndex]
            }
            i += charsInSection
        }
    }
    return result;
};

// 7. Reverse Integer -Medium
// /**
//  * @param {number} x
//  * @return {number}
//  */
var reverse = (x) => {
    if (x < 0) return - 1 * reverse(-x);
    const solution = (x + "").split('').reverse().join('');
    return (solution > 2 ** 31 -1 ) ? 0 : solution;
};