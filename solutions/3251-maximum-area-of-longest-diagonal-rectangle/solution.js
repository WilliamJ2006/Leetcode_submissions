/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    const output = [];
    for (let [x, y] of dimensions) {
        output.push(Math.sqrt((x*x)+(y*y)));
    }
    let max = Math.max(...output);
    const maxDimens = dimensions.filter((val, i) => output[i] === max);
    if(maxDimens.length > 1) {
        return Math.max(...maxDimens.map(val => {
            return val[0] * val[1];
        }))
    }
    let area;
    for(let i = 0; i < output.length; i++) {
        if(output[i] === max) {
            area = dimensions[i][0] * dimensions[i][1];
        }
    }
    return area
};
