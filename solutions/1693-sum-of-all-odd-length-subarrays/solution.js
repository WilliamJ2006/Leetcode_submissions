/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    let index = 0;
    while(index < arr.length) {
        let check = index+1;
        while(check <= arr.length) {
            let subarray = arr.slice(index, check);
            if(subarray.length%2 === 1) {
                const total = subarray.reduce((acc, curr) => acc+curr, 0);
                sum += total;
            }
            check++;
        }
        index++;
    }
    return sum;
};
