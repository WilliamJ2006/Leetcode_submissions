/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const obj = {};
    for(const letter of s) {
        obj[letter] = (obj[letter] || 0) + 1;
    }
    for(const letter of t) {
        if(!obj[letter]) return false;
        obj[letter]--;
    }
    return true;
};
