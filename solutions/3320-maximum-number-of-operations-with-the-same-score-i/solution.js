/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    let value1 = nums.shift();
    let value2 = nums.shift();
    let total = value1+value2;
    let ops = 1;
    while(nums.length >= 2) {
        let num1 = nums.shift();
        let num2 = nums.shift();
        let sum = num1+num2;
        if(sum === total) {
            ops++;
        } else {
            break;
        }
    }
    return ops;
};
