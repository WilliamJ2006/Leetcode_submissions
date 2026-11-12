class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        """
        set
        dict
        for each make freq map, add freq map to set
        for 
        """
        obj = {}
        for i in range(len(strs)):
            sorted_str = ''.join(sorted(strs[i]))
            if not sorted_str in obj: obj[sorted_str] = []
            obj[sorted_str].append(strs[i])
        return list(obj.values())
