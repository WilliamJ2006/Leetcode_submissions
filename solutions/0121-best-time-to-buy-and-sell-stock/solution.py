class Solution(object):
    def maxProfit(self, prices):
        maxProf = 0
        minStock = float('inf')
        for price in prices:
            minStock = min(minStock, price)
            maxProf = max(maxProf, price - minStock)
        return maxProf
        
