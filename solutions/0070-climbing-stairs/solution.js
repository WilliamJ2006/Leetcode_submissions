/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // let count = 0
    // const helper = (i) => {
    //     if(i > n) return;
    //     if(i === n) {
    //         count++
    //         return
    //     }
    //     for(let j = 1; j <= 2; j++) {
    //         helper(j+i)
    //     }
    // }
    // helper(0)
    // return count
    const cache = {}
    const helper = (i) => {
        if(i > n) return 0
        if(i === n) return 1
        let numOfWays = 0
        for(let j = 1; j <= 2; j++) {
            if(cache.hasOwnProperty(i+j)) {
                numOfWays+=cache[i+j]
            } else {
                cache[i+j] = helper(i+j)
                numOfWays+=cache[i+j]
            }
        }
        return numOfWays
    }
    return helper(0)
};
// n = 3
// first is helper(0)
// if i(0) === 3
// call helper(1)
// i===n
// helper(2)
// if 2 === 3
// helper(3)
// count++, return
//helper(2)
// helper(3)
// return
// helper(4)
