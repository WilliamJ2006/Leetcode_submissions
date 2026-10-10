class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        output = set([])
        nums.sort()
        for i in range(len(nums)-2):
            j = i+1
            k = len(nums)-1
            while j < k:
                total = nums[i] + nums[j] + nums[k]
                if total == 0: output.add(tuple([nums[i], nums[j], nums[k]]))
                if total < 0: j+=1
                else: k-=1
        output = list(output)
        for i in range(len(output)): output[i] = list(output[i])
        return output
