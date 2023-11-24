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
