//8. String to Integer (atoi) -Medium
// /**
//  // * @param {string} str
//  // * @return {number}
//  // */
var myAtoi = function(str) {
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

// 9. Palindrome Number -Easy
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

// 10. Regular Expression Matching -Hard
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


// 11. Container With Most Water -Medium
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

// 12. Integer to Roman -Medium
const map = new Map([
    [1, 'I'],
    [5, 'V'],
    [10, 'X'],
    [50, 'L'],
    [100, 'C'],
    [500, 'D'],
    [1000, 'M']
])
// /**
//  * @param {number} num
//  * @return {string}
//  */
var intToRoman = function(num) {
    let base = 1
    const result = []
    while (num > 0) {
        const last = num % 10

        if (last < 4) {
            for (let k = last; k > 0; k--) {
                result.unshift(map.get(base))
            }
        } else if (last === 4) {
            result.unshift(...[map.get(base), map.get(base * 5)])
        } else if (last === 5) {
            result.unshift(map.get(base * 5))
        } else if (last < 9) {
            for (let k = last; k > 5; k--) {
                result.unshift(map.get(base))
            }
            result.unshift(map.get(base * 5))
        } else {
            result.unshift(...[map.get(base), map.get(base * 10)])
        }

        base *= 10

        num = (num - last) / 10
    }
    return result.join('')
};

//13. Roman to Integer -Easy
// /**
//  // * @param {string} s
//  // * @return {number}
//  // */
var romanToInt = function(s) {
    let sum = 0;

    for (let i=0; i < s.length; i++) {
        let prev = s[i-1];
        switch(s[i]) {
            case "I":
                sum += 1;
                break;
            case "V":
                sum = prev === "I" ?   sum + 3 : sum + 5;
                break;
            case "X":
                sum = prev === "I" ?   sum + 8 : sum + 10;
                break;
            case "L":
                sum = prev === "X" ? sum + 30 : sum + 50;
                break;
            case "C":
                sum = prev === "X" ? sum + 80 : sum + 100;
                break;
            case "D":
                sum = prev === "C" ? sum + 300 : sum + 500;
                break;
            case "M":
                sum = prev === "C" ? sum + 800 : sum + 1000;
                break;
        }
    }

    return sum;
};


// 14. Longest Common Prefix -Easy

var longestCommonPrefix = function(strs) {
    if (strs.length == 0) {
        return "";
    }

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length-1);
        }
    }

    return prefix;
};