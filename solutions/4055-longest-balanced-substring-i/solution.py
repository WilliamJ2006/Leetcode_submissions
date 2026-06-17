class Solution:
    def longestBalanced(self, s: str) -> int:
        if len(s) <= 2: return len(s)
        max_length = 1
        for i in range(len(s)):
            freq = {}
            for j in range(i, len(s)):
                letter = s[j]
                freq[letter] = freq.get(letter, 0) + 1
                arr = list(freq.values())
                if len(set(arr)) == 1: max_length = max(max_length, sum(arr))
        return max_length
