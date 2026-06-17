class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        
        max_count = 0
        set_nums = set(nums)
        for num in set_nums:
            if num - 1 not in set_nums:
                last = num + 1
                while last in set_nums:
                    last+=1
                max_count = max(max_count, last - num)
        return max_count
