class Solution:
    import heapq
    def majorityElement(self, nums: List[int]) -> int:
        freq_map = {}
        for num in nums: freq_map[num] = freq_map.get(num, 0) + 1
        return heapq.nlargest(1, freq_map, key=freq_map.get)[0]
