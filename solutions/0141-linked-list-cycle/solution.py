# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        if head == None: return False
        seen = set()
        pointer = head
        while pointer.next is not None:
            if pointer.next in seen: return True
            seen.add(pointer)
            pointer = pointer.next
        return False
