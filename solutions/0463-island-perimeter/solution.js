/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let total = 0
    const dirfunc = (x, y) => {
        let sides = 4
        if(x-1 >= 0) if(grid[x-1][y] === 1) sides--;
        if(x+1 < grid.length) if(grid[x+1][y] === 1) sides--;
        if(y+1 < grid[0].length) if(grid[x][y+1] === 1) sides--;
        if(y-1 >= 0) if(grid[x][y-1] === 1) sides--;
        return sides
    }
    for(let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === 1) total+=dirfunc(i, j)
        }     
    }
    return total
};
