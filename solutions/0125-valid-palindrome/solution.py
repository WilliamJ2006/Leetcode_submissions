class Solution:
    def isPalindrome(self, s: str) -> bool:
        string = ''
        for val in s:
            if val.isalnum(): string+=val.lower()
        front = 0
        back = len(string)-1
        while front < back:
            if string[front] == string[back]: 
                front+=1
                back-=1
                continue
            return False
        return True
