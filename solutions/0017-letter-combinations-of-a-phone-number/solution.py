class Solution:
    ## make map and populate with digit keys and string values
    ## recursion that takes in the index and an array
    ## iterative loop which will push to the array the for all the 
    ## elements in the string
    ## pop
    def letterCombinations(self, digits: str) -> list[str]:
        output = []
        letters = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }
        def helper(index, array):
            if len(array) == len(digits): output.append(''.join(array))
            if index > len(digits)-1: return
            for i in range(len(letters[digits[index]])):
                array.append(letters[digits[index]][i])
                helper(index+1, array)
                array.pop()
        arr = []
        helper(0, arr)
        return output
