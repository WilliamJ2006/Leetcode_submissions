class Solution(object):
    def fizzBuzz(self, n):
        arr = []
        for i in range(1, n+1):
            s = ''
            if i%3 == 0: s = s+'Fizz'
            if i%5 == 0: s = s+'Buzz'
            arr.append(s or str(i))
        return arr
        
