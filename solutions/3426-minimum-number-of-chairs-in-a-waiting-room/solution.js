/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let count = 0;
    let people = 0;
    for(const letter of s) {
        if(letter === 'E') {
            people++;
            if(count < people) count++;
        } else {
            people--;
        }
    }
    return count
};
