class Solution:
    def diagonalSum(self, mat: list[list[int]]) -> int:
        total = 0
        j = 0
        k = len(mat[0])-1
        for i in range(len(mat)):
            total+=mat[i][j]
            if j != k: total+=mat[i][k]
            j+=1
            k-=1
        return total
