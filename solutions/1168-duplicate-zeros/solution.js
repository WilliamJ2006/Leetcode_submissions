/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let n = arr.length
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0){
            count++;
            arr.splice(i+1, 0, 0);
            i++
        }
    }
    for(let i = 0; i < count; i++) {
        arr.pop();
    }
};
