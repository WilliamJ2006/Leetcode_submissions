class Solution:
    def search(self, nums: list[int], target: int) -> int:
        front = 0
        back = len(nums)-1
        while front <= back:
            mid = math.floor(front + (back - front)/2)
            if nums[mid] == target: return mid
            if nums[mid] >= nums[front]:
                if target >= nums[front] and target < nums[mid]: back = mid - 1
                else: front = mid + 1
            else:
                if target > nums[mid] and target <= nums[back]: front = mid + 1
                else: back = mid - 1
        return -1
