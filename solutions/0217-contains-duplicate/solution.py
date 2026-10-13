class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        nums_set = set(nums)
        return len(nums_set) != len(nums)
