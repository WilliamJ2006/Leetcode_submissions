/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i = digits.length-1; i >= 0; i--) {
        if(i === digits.length-1) {
            digits[i]++;
            continue;
        }
        if(digits[i+1] === 10) {
            digits[i+1] = 0;
            digits[i]++;
        }
    }
    if(digits[0] === 10) {
        digits[0] = 0;
        digits.unshift(1);
    }
    return digits;
};
