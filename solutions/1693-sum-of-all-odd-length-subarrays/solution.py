class Solution:
    def sumOddLengthSubarrays(self, arr: list[int]) -> int:
        total = 0
        for i in range(len(arr)):
            sub_total = 0
            for j in range(i, len(arr)):
                sub_total+=arr[j]
                if (i+j+1)%2 == 1: total+=sub_total
        return total

