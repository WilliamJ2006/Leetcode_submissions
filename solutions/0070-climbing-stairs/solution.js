/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const mem = {};
    const climbHelper = (i) => {
        if(i <= 1) {
            return 1;
        }
        if(mem[i]) return mem[i];

        mem[i] = climbHelper(i-1) + climbHelper(i-2);
        return mem[i];
    }
    return climbHelper(n);
};
