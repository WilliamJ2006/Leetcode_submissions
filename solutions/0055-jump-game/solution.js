/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const check = new Array(nums.length);
    for(let i = 0; i < nums.length; i++) {
        if(i === nums.length-1){
            check[i] = true;
        } else {
            check[i] = false;
        }
    }
    for(let i = check.length-2; i >= 0; i--) {
        for (let j = i + 1; j <= i + nums[i] && j < nums.length; j++) {
            if (check[j]) {
                check[i] = true;
                break;
            }
        }
    }
    return check[0];

};
