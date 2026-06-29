class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = set('aeiou')
        vc = 0
        for i in range(k):
            if s[i] in vowels: vc+=1
        mc = vc
        for i in range(k, len(s)):
            if s[i-k] in vowels: vc-=1
            if s[i] in vowels: vc+=1
            mc = max(mc, vc)
            if count == k: return mc
        return mc
