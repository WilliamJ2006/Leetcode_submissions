/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const obj = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const stack = []
    for(let i = 0; i < s.length; i++) {
        if(obj[s[i]]) {
            if(stack[stack.length-1] === obj[s[i]]) {
                stack.pop()
                continue
            }
        }
        stack.push(s[i])
    }
    return stack.length === 0
};

