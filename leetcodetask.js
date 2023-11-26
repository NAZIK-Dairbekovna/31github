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

// 10. Regular Expression Matching
// /**
//  * @param {string} s
//  * @param {string} p
//  * @return {boolean}
//  */
var isMatch = function(s, p) {
    const check = (s, p, i, j) => {
        if (j > p.length - 1) {
            return i > s.length - 1
        }

        const isNextQuantiyModifier = p[j + 1] === '*'

        if (!isNextQuantiyModifier) {
            if ([s[i], '.'].includes(p[j])) {
                return i < s.length && check(s, p, i + 1, j + 1)
            } else {
                return false
            }
        } else {
            if ([s[i], '.'].includes(p[j])) {
                return check(s, p, i, j + 2) || (i < s.length && check(s, p, i + 1, j))
            } else {
                return check(s, p, i, j + 2)
            }
        }

    }

    return check(s, p, 0, 0)
};
// 11. Container With Most Water
// /**
//  * @param {number[]} height
//  * @return {number}
//  */
var maxArea = function(height) {
    let area = 0, i=0, j=height.length-1;
    while(i < j) {
        const temp = (j-i)*Math.min(height[i], height[j]);
        area = Math.max(area, temp);
        if(height[i] > height[j]) {
            j -= 1
        } else {
            i += 1
        }
    }
    return area;
};