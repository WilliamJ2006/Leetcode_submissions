/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count = 0;
    for(let detail of details) {
        const age = Number(detail[11]+detail[12])
        if(age > 60) count++;
    }
    return count;
};
