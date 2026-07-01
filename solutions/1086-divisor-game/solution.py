class Solution:
    def divisorGame(self, n: int) -> bool:
        aliceTurn = True
        i = 1
        while i < n:
            if n%i == 0:
                n = n-i
                aliceTurn = not aliceTurn
                i = 1
                continue
            i+=1
        return not aliceTurn
