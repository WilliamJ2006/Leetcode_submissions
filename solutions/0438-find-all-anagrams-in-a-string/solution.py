class Solution:
    from collections import Counter
    def findAnagrams(self, s: str, p: str) -> list[int]:
        """
        for loop 
        """
        if len(p) > len(s): return []

        letterC = Counter(p)
        stringC = Counter(s[:len(p)])
        out = [0] if letterC == stringC else []
        
        for i in range(len(p), len(s)):
            stringC[s[i]]+=1
            removed = s[i-len(p)]
            stringC[removed]-=1
            if stringC[removed] <= 0: del stringC[removed]
            if letterC == stringC: out.append(i-len(p)+1)

        return out
            
            

        

