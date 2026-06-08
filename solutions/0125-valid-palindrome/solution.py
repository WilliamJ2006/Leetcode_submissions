class Solution(object):
    def isPalindrome(self, s):
        front = 0
        back = len(s)-1
        while front <= back:
            if not s[front].isalnum():
                front += 1
            elif not s[back].isalnum():
                back -= 1
            elif s[front].lower() != s[back].lower(): return False
            else: 
                front+=1
                back-=1
        return True
        
