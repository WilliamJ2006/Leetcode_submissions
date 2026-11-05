class Solution:
    def climbStairs(self, n: int) -> int:
        mem = {}
        def helper(i):
            if i > n: return 0
            if i == n: return 1

            numOfWays = 0

            for j in range(1, 3):
                if i+j in mem: numOfWays+=mem[i+j]
                else:
                    mem[i+j] = helper(i+j)
                    numOfWays+=mem[i+j]
            
            return numOfWays

        return helper(0)
