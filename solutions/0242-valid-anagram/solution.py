class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        freq_map = {}
        for letter in list(s): freq_map[letter] = freq_map.get(letter, 0) + 1
        for letter in list(t): 
            if not letter in freq_map.keys(): return False
            if freq_map.get(letter) <= 0: return False
            freq_map[letter]-=1
        if any(freq_map.values()): return False
        return True
