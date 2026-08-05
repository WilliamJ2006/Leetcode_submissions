class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        bannedWords = set(banned)
        punctuation = set(string.punctuation)
        para = list(paragraph)
        freq = {}
        # para = paragraph.replace(",", " ")
        # para = para.replace('.', " ")
        # para = para.replace('!', " ")
        # para = para.replace('?', " ")
        # para = para.replace("'", " ")
        # para = para.replace(";", " ")
        # para = para.replace('"', " ")
        for i in range(len(para)):
            if para[i] in punctuation: para[i] = ' '
        para = ''.join(para).split(' ')
        for word in para:
            check = word.lower()
            if check in bannedWords or check == '':  continue
            freq[check] = freq.get(check, 0) + 1
        maxVal = max(list(freq.values()))
        for key in list(freq.keys()):
            if freq[key] == maxVal: return key
