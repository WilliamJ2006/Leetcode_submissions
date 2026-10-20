class Solution:
    def threeSumClosest(self, nums: list[int], target: int) -> int:
        minDiff = float('inf')
        output = 0
        nums.sort()
        for i in range(len(nums)-2):
            j = i+1
            k = len(nums)-1
            while j < k:
                total = nums[i] + nums[j] + nums[k]
                if total == target: return total
                diff = abs(total-target)
                if minDiff > diff:
                    minDiff = diff
                    output = total
                if total < target: j+=1
                else: k-=1
        return output
