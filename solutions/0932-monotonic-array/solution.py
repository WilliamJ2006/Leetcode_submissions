class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        inc = False
        dec = False
        for i in range(1, len(nums)):
            if nums[i-1] < nums[i]: inc = True
            elif nums[i-1] > nums[i]: dec = True
        if inc and dec: return False
        return True
