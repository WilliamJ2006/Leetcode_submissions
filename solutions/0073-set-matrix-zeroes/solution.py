
class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        mem = {}
        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                if matrix[i][j] == 0: mem[f'{i}, {j}'] = True
        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                if f'{i}, {j}' in mem:
                    for n in range(len(matrix)): matrix[n][j] = 0
                    for m in range(len(matrix[i])): matrix[i][m] = 0
        
