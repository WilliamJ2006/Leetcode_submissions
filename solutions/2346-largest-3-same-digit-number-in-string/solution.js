/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let largest = -Infinity;
    for(let i = 0; i < num.length; i++){
        if (num[i] === num[i+1] && num[i] === num[i+2]){
            if (Number(largest) < Number(num[i] + num[i+1] + num[i+2])){
                largest = num[i] + num[i+1] + num[i+2];
            }
        }
    }
    if (largest === -Infinity){
        return ""
    }
    return largest;
};
