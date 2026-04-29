/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let lastPush;
    let arr = [];
    if(s.length < 2) {
        return false;
    }
    for (let i = 0; i < s.length; i++) { 
        if(lastPush + s[i] === '()' || lastPush + s[i] === '[]' || lastPush + s[i] === '{}') {
            arr.pop();
            lastPush = arr[arr.length-1]
            continue;
        }
        arr.push(s[i]);
        lastPush = s[i];
    }
    return arr.length === 0 ? true : false;
};

