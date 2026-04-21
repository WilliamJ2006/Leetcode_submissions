/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.includes(target)) {
        return nums.indexOf(target);
    }
    nums.push(target);
    nums.sort((a, b) => a - b);
    return nums.indexOf(target);
};
