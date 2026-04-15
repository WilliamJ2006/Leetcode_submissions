/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let townJudge = null;
    let obj = {};
    for(let i = 1; i <= n; i++){
        obj[i] = 0
    }
    for(let i = 0; i < trust.length; i++) {
        obj[trust[i][0]]--;
        obj[trust[i][1]]++;
    }
    Object.keys(obj).forEach(key => {
        if(obj[key] === n-1) {
            townJudge = Number(key);
        }
    })
    return townJudge ? townJudge : -1;
};
