class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        """
        variable to hold total island count
        Create a seen matrix of nxm with all index initialized as false
        Create direction array containing adjacent coordinates
        create a recursive dfs function that takes in parameters row and column
        termination condition for if row and column are out of bounds 
        if grid[row][column] = 1, matrix[row][column] = True
        recursively call our function in adjacent directions, skip if adjacent direction is already True in matrix 

        loop through grid and if grid[row][column] is 1 and matrix[row][column] is False, call recursively
        """
        total_islands = 0
        matrix = []
        n, m = len(grid), len(grid[0])
        # directions = [
        #     [0, -1],
        #     [0, 1],
        #     [1, 0],
        #     [-1, 0]
        # ]
        for r in range(n):
            matrix.append([])
            for c in range(m):
                matrix[r].append(False)
        def helper(row, column):
            if row < 0 or row >= n or column < 0 or column >= m: return
            if matrix[row][column]: return
            if grid[row][column] == '1': matrix[row][column] = True
            else: return
            # for dr, dc in directions:
            #     new_row = row+dr
            #     new_column = column+dc
            #     helper(new_row, new_column)
            helper(row-1, column)
            helper(row+1, column)
            helper(row, column-1)
            helper(row, column+1)
        for r in range(n):
            for c in range(m):
                if grid[r][c] == '1' and not matrix[r][c]:
                    helper(r, c)
                    total_islands+=1
        return total_islands
