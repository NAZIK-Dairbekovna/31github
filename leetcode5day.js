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


// Zigzag conversion
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