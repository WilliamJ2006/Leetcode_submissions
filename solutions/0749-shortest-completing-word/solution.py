class Solution:
    def shortestCompletingWord(self, licensePlate: str, words: list[str]) -> str:
        words.sort(key=len)
        freq = []
        for char in licensePlate:
            if char.isalpha(): freq.append(char.lower())        
        for word in words:
            check = True
            for letter in freq:
                if letter not in freq or freq.count(letter) > word.count(letter):
                    check = not check
                    break
            if check: return word
