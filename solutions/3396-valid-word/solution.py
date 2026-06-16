class Solution:
    def isValid(self, word: str) -> bool:
        vowel = False
        conso = False
        vowels = ['a', 'e', 'i', 'o', 'u']
        if not word.isalnum(): return False
        if len(word) < 3: return False
        for letter in word:
            if letter.lower() in vowels: vowel = True
            elif letter.isalpha(): 
                if letter.lower() not in vowels: conso = True
        if conso == False: return False
        if vowel == False: return False
        return True
