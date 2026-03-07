/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const string = s.toLowerCase();
    let left = 0;
    let right = string.length-1;
    while(left <= right) {
        if(string[left] === string[right] ){
            left++;
            right--;
        } else if (!(/[a-z0-9]/i.test(string[left]))) {
            left++;
        } else if (!(/[a-z0-9]/i.test(string[right]))) {
            right--;
        } else {
            return false;
        }
    }
    return true;
};
