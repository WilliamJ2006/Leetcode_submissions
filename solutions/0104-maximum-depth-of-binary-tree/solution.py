# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: TreeNode | None) -> int:
        self.depth = 0
        self.max = 0
        def helper(node):
            if not node: return
            self.depth+=1
            self.max = max(self.depth, self.max)
            helper(node.left)
            helper(node.right)
            self.depth-=1
            # if not node: return 0
            # left = helper(node.left)
            # right = helper(node.right)
            # return 1+max(left, right)
        helper(root)
        return self.max
