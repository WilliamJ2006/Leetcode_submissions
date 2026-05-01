/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let output = '';
    const length = Math.min(...(strs.map(string => string.length)));
    for(let i = 0; i < length; i++) {
        const check = strs[0][i];
        for(let j = 1; j < strs.length; j++) {
            if(strs[j][i] !== check) {
                return output
            }
        }
        output+=check;
    }
    return output;
};
