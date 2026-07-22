/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const obj = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    if(s.length < 2) return false;
    const stack = []
    for(const value of s) {
        if(obj[value]) {
            stack.push(value);
        } else {
            if(obj[stack[stack.length-1]] === value) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0
};

