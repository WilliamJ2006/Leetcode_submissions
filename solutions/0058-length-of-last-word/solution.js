/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastString;
    let string = s.trim();
    let back = s.length-1;
    if(!string.includes(' ')) return string.length;
    while (back > 0) {
        if(string[back] === ' ') {
            lastString = string.slice(back+1, string.length).trim();
            break;
        }
        back--;
    }
    return lastString.length;
};
