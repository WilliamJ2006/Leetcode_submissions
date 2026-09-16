class Solution(object):
    def twoSum(self, nums, target):
        diff = {}
        for i in range(len(nums)):
            ans = target-nums[i]
            if ans in diff: return [diff[ans], i]
            diff[nums[i]] = i
        return []
