class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        if len(nums) == 0: return 0
        counter = 1
        lastUnique = 0
        for i in range(len(nums)-1):
            if nums[i] != nums[i+1]:
                nums[lastUnique+1] = nums[i+1]
                lastUnique+=1
                counter+=1
        return counter
