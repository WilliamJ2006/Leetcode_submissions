from collections import defaultdict
class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        count = 0
        res = 0
        prefix_sums = defaultdict(int)
        prefix_sums[0] = 0
        for i, n in enumerate(nums, 1):
            if n == 0:
                count -= 1
            else:
                count += 1
            if count in prefix_sums:
                res = max(res, i - prefix_sums[count])
            else:
                prefix_sums[count] = i
        return res
