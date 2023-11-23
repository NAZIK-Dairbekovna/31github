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
let addTwoNumbers = function(l1, l2) {
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

//8. String to Integer (atoi)

// /**
//  // * @param {string} str
//  // * @return {number}
//  // */

let myAtoi = function(str) {
    let result = 0
    let sign = 1
    let isNonWhiteSpaceMet = false
    let isNumberPhase = false

    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (char === ' ') {
            if (!isNonWhiteSpaceMet) {
                continue
            } else {
                break
            }
        }
        isNonWhiteSpaceMet = true

        if (char >= '0' && char <= '9') {
            isNumberPhase = true
            result = result * 10 + (char - '0')
            continue
        }

        if (char === '+' && !isNumberPhase) {
            isNumberPhase = true
            continue
        }

        if (char === '-' && !isNumberPhase) {
            isNumberPhase = true
            sign *= -1
            continue
        }

        break
    }
    result *= sign
    return Math.min(Math.max(-(2 ** 31), result), 2**31 - 1)
};

// 9. Palindrome Number
// /**
//  * @param {number} x
//  * @return {boolean}
//  */
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }

    let reversed = 0;
    let current = x;
    while(current !== 0) {
        reversed = reversed*10 + current % 10;
        current = Math.floor(current/10)
    }
    return x === reversed;
};
