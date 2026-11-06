class Solution:
    def climbStairs(self, n: int) -> int:
        """
        f(0) = 1
        f(1) = 1
        f(2) = f(0) + f(1) = 2
        f(3) = f(1) + f(2) = 1 + 2 = 3
        f(4) = f(2) + f(3) = 2 + 3 = 5
        f(n) = f(n-2) + f(n-1) 
        """
        f2 = 1
        f1 = 1
        for i in range(2, n+1):
            num_ways = f2 + f1
            f2 = f1
            f1 = num_ways
        return f1


        
