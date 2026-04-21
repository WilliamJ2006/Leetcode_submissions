/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // let ans = 1;
    // for(let i = 0; i < Math.abs(n); i++) {
    //     ans*=x;
    // }
    // if(n < 0) {
    //     return 1/ans;
    // } else {
    //     return ans;
    // }
    return Math.pow(x, n);
};
