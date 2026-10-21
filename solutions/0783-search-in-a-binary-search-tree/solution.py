# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def searchBST(self, root: TreeNode | None, val: int) -> TreeNode | None:
        def helper(node):
            if not node: return
            if node.val == val: return node
            if node.val > val: return helper(node.left)
            else: return helper(node.right)
        return helper(root)
