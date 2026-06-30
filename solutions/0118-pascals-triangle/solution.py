class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        result = []
        for i in range(numRows-1, -1, -1):
            result.append([1]*(numRows-i))
        for r in range(2, len(result)):
            for c in range(len(result[r])):
                if c >= 1 and c <= len(result[r])-2 and r >= 0 and r <= len(result):
                    result[r][c] = result[r-1][c-1] + result[r-1][c]
        return result
