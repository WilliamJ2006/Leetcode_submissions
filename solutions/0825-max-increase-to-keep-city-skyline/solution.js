/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let count = 0;
    const maxRow = [];
    const maxColumn = [];
    for(let i = 0; i < grid.length; i++) {
        maxRow.push(Math.max(...grid[i]));
        const subArr = []
        for(let j = 0; j < grid[i].length; j++) {
            subArr.push(grid[j][i])
        }
        maxColumn.push(Math.max(...subArr));
    }
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            const min = Math.min(maxRow[i], maxColumn[j]);
            count += min - grid[i][j];
        }
    }
    return count;
};
