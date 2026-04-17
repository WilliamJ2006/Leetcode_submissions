/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const obj = {};
    for(let i = 0; i < ransomNote.length; i++) {
        obj[ransomNote[i]] = (obj[ransomNote[i]] || 0) + 1;
    }
    for(let i = 0; i < magazine.length; i++) {
        if(obj[magazine[i]]) {
            obj[magazine[i]]--;
        }
    }
    return Object.values(obj).every(value => value <= 0);
};
