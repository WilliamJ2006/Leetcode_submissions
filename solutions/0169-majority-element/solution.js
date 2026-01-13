/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority = null;
    let tracker = 0;
    for(let i = 0; i < nums.length; i++){
        if(tracker === 0) {
            majority = nums[i];
        }
        if(nums[i] === majority){
            tracker++;
        } else {
            tracker--;
        }
    }
    return majority;
};
