class Solution:
    def deleteGreatestValue(self, grid: list[list[int]]) -> int:
        total = 0
        for i in range(len(grid)): grid[i].sort()
        # while grid[0]:
        #     maxVal = float('-inf')
        #     for i in range(len(grid)): maxVal = max(maxVal, grid[i].pop())
        #     total+=maxVal
        # return total

        index = 0
        while index < len(grid[0]):
            maxVal = float('-inf')
            for i in range(len(grid)): maxVal = max(maxVal, grid[i][index])
            total+=maxVal
            index+=1
        return total
            

