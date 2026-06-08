class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) < 2: return False
        stack = []
        paren_dict = {'[':']', '(':')', '{':'}', '_': "_"}
        for item in s:
            if(len(stack) > 0):
                if stack[-1] == '(' or stack[-1] == '[' or stack[-1] == '{':
                    if paren_dict[stack[-1]] == item: 
                        stack.pop()
                        continue
            stack.append(item)
        if len(stack) == 0: return True
        else: return False
            
            
