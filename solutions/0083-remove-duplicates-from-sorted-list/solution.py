# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None: return head
        curr = head
        nextNum = head.next
        while nextNum is not None:
            if curr.val == nextNum.val: nextNum = nextNum.next
            else:
                curr.next = nextNum
                curr = nextNum
                nextNum = nextNum.next
            curr.next = None
        return head
