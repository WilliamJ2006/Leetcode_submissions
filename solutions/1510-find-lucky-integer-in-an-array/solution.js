/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const freq = {};
    copyArr = [...arr]
    copyArr.sort((a, b) => b - a)
    copyArr.forEach(num => freq[num] = (freq[num] || 0) + 1)
    for (let num of copyArr) {
        if (num === freq[num]) {
            return num;
        }
    }
    return -1;
};
