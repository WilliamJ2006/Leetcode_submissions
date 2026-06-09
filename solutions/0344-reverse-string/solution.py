class Solution:
    def reverseString(self, s: List[str]) -> None:
        front = 0
        back = len(s)-1
        while front < back:
            frontValue = s[front]
            backValue = s[back]
            s[front] = backValue
            s[back] = frontValue
            front+=1
            back-=1
        return s
            
        
