class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for i in range(0, 9, 3):
            for j in range(0, 9, 3):
                box = []
                for r in range(3):
                    for c in range(3):
                        if board[i+r][j+c] != '.' and i+r >= 0 and i+r < 9 and j+c >= 0 and j+c < 9:
                            box.append(board[i+r][j+c])
                if len(set(box)) < len(box): return False
        for i in range(len(board)):
            vert = []
            hor = []
            for j in range(len(board[i])):
                if(board[i][j] != '.'): hor.append(board[i][j])
                if(board[j][i] != '.'): vert.append(board[j][i])
            if len(set(vert)) < len(vert): return False
            if len(set(hor)) < len(hor): return False
        return True
                
