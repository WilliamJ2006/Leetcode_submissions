class Solution(object):
    def isPalindrome(self, x):
        front = 0
        back = len(str(x))-1
        while front <= back:
            if str(x)[front] != str(x)[back]: return False
            front=front+1
            back=back-1
        return True
        
