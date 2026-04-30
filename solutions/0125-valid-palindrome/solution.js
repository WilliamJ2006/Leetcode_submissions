/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const arr = [];
    const string = s.split('').filter(letter => (/^[a-z0-9]+$/i).test(letter)).join('').toLowerCase();
    if(string.length <= 2) return string.split('').every(val => val === string[0]);
    let mid = Math.floor((string.length)/2);
    let lastPush;
    for(let i = 0; i < string.length; i++) {
        if(string.length%2 === 1) {
            if(i <= mid) {
                arr.push(string[i]);
                lastPush = string[i];
            }
        } else {
            if(i < mid) {
                arr.push(string[i]);
                lastPush = string[i];
            }
        }
        if(i >= mid) {
            if(lastPush === string[i]) {
                arr.pop();
                lastPush = arr[arr.length-1];
            }
        }
    }
    return arr.length === 0 ? true : false;
};
