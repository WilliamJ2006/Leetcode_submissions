/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // const sorted = nums.toSorted((a, b) => a - b)
    // let tracker = 0;
    // for(let i = 0; i <= sorted.length; i++) {
    //     if (tracker === sorted[i]) {
    //         tracker++;
    //         continue;
    //     } else {
    //         if(!tracker && tracker !== 0){
    //             return sorted[sorted.length-1]+1;
    //         } else {
    //             return tracker;
    //         }
    //     }
    // }

    // let front = 0; 
    // let checker = front + 1;
    // if(sorted[front] !== 0) {
    //     return 0;
    // }
    // while(front < sorted.length) {
    //     if(sorted[front]+1 === sorted[checker]){
    //         front++;
    //         checker++;;
    //         continue;
    //     } else {
    //         return sorted[front]+1;
    //     }
    // }

    // const set = new Set(nums);
    // for(let i = 0; i <= nums.length; i++) {
    //     if(!set.has(i)) return i;
    // }

    if(!nums.includes(0)) return 0;

    const sum = nums.reduce((acc, curr) => acc + curr, 0);

    const max = Math.max(...nums);

    let expected = 0;
    for(let i = 0; i <= max; i++) {
        expected += i;
    }
    return expected-sum ? expected-sum : max+1;
};
