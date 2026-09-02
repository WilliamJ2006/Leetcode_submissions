/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let num = 0
    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ]
    const check = []
    for(let i = 0; i < grid.length; i++) {
        check[i] = []
        for (let j = 0; j < grid[i].length; j++) {
            check[i][j] = false
        }
    }
    const helper = (i, j) => {
        if(grid[i][j] === '1' && !check[i][j]) check[i][j] = true
        for(const direct of directions) {
            const checki = i+direct[0]
            const checkj = j+direct[1]
            if(checki >= grid.length || checki < 0 || checkj >= grid[i].length || checkj < 0) continue
            if(grid[checki][checkj] === '1') {
                if(!check[checki][checkj]) helper(checki, checkj)
                check[checki][checkj] = true
            }
        }
    }
    for(let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === '1' && !check[i][j]) {
                num++
                helper(i, j)
            }
        }
    }
    return num
};
