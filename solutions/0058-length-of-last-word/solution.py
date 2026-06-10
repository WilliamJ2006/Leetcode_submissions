class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        lastString = None
        string = s.strip()
        back = len(string)-1
        length = 0
        if not ' ' in string: return len(string)
        while back > 0:
            if string[back] == ' ': break
            back-=1
            length+=1
        return length
