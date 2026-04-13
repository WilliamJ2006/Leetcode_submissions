/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const obj = {};
    for(let i = 0; i < strs.length; i++) {
        let sorted = strs[i].split('').sort().join('');
        if(!(sorted in obj)) obj[sorted] = [];
        obj[sorted].push(strs[i]);
    }
    return Object.values(obj);
};
