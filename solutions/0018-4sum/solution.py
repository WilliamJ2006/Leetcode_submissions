class Solution:
    def fourSum(self, nums: list[int], target: int) -> list[list[int]]:
        output = set([])
        nums.sort()
        for i in range(len(nums)-3):
            for j in range(i+1, len(nums)-2):
                c = j+1
                d = len(nums)-1
                while c < d:
                    total = nums[i] + nums[j] + nums[c] + nums[d]
                    if total == target: output.add(tuple([nums[i], nums[j], nums[c], nums[d]]))
                    if total < target: c+=1
                    else: d-=1
        output = list(output)
        for i in range(len(output)): output[i] = list(output[i])
        return output
