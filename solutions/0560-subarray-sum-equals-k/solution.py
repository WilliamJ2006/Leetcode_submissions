class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count = defaultdict(int)
        count[0] = 1
        curr_sum = 0
        res = 0
        for num in nums:
            curr_sum += num
            res += count[curr_sum - k]
            count[curr_sum] += 1
        return res
