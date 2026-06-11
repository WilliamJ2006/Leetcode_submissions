class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        obj = {}
        for i in range(len(strs)):
            sorted_str = ''.join(sorted(strs[i]))
            if not sorted_str in obj: obj[sorted_str] = []
            obj[sorted_str].append(strs[i])
        return list(obj.values())
