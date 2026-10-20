# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: TreeNode | None, targetSum: int) -> bool:
        if not root: return False
        self.total = 0
        def helper(node):
            if not node: return
            self.total+=node.val
            if self.total == targetSum and not node.left and not node.right: return True
            left = helper(node.left)
            if left: return True
            right = helper(node.right)
            if right: return True
            self.total-=node.val
        return helper(root) or False
            

