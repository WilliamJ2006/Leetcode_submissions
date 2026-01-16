/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // const set = new Set(nums);
    // // if(set.size === nums.length) {
    // //     return false;
    // // } else {
    // //     return true;
    // // }
    // return set.size !== nums.length
    let freq = {};
    for (let num of nums) {
        if (freq[num]){
            return true;
        } else {
            freq[num] = 1;
        }
    }
    return false;
};
