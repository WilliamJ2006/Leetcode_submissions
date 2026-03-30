/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    let j = 0;
    let k = mat[0].length-1;
    if(mat.length <= 1) return mat[0][0];
    for(let i = 0; i < mat.length; i++) {
        sum += mat[i][j];
        if (j !== k) {
            sum += mat[i][k];
        }
        j++;
        k--;
    }
    return sum;
};
