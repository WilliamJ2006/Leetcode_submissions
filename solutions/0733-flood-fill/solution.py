class Solution:
    def floodFill(self, image: list[list[int]], sr: int, sc: int, color: int) -> list[list[int]]:
        """
        termination condition, the starting color is already the same as new color
        create helper function
        termination condition, if i or j is out of bounds or not equal to original color 
        set current pixel to new color
        recursively call our helper function 4 times in the 4 adjecent directions
        call helper outside with arguments (sr, sc, image[sr][sc]) 
        """
        if color == image[sr][sc]: return image
        m, n = len(image), len(image[0])
        def dfs(i, j, s_color):
            if i < 0 or i >= m or j < 0 or j >= n: return
            if image[i][j] != s_color: return
            image[i][j] = color
            dfs(i-1, j, s_color)
            dfs(i+1, j, s_color)
            dfs(i, j-1, s_color)
            dfs(i, j+1, s_color)
        dfs(sr, sc, image[sr][sc])
        return image
