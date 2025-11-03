/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const newX = String(x);
    const newArr = [];
    for (let j = newX.length - 1; j >= 0; j--){
        if (newX[j] == '-'){
            newArr.unshift(newX[j]);
        } else {
            newArr.push(newX[j]);
        }
    }
    if (Number(newArr.join('')) < -(2 ** 31) || Number(newArr.join('') > (2 ** 31 - 1))) {
        return 0;
    }
    return Number(newArr.join(''));
};
