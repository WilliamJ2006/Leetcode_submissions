class Solution(object):
    def twoSum(self, nums, target):
        front = 0

        while front < len(nums) :
            check = front + 1
            while check < len(nums) :
                if nums[front] + nums[check] == target :
                    return [front, check]
                check += 1
            front += 1
