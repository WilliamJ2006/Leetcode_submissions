class Solution:
    def bestHand(self, ranks: List[int], suits: List[str]) -> str:
        if len(set(suits)) == 1: return 'Flush'
        freq = {}
        for rank in ranks: freq[rank] = (freq.get(rank) or 0) + 1
        max_hand = max(freq.values())
        if max_hand >= 3: return 'Three of a Kind'
        if max_hand == 2: return 'Pair'
        return 'High Card'
