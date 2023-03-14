// https://leetcode.com/problems/invert-binary-tree/



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const invertTreeTest = {
   val: 4,
   left: {
      val: 2,
      left: {
         val: 1
      },
      right: {
         val: 3
      }
   },
   right: {
      val: 7,
      left: {
         val: 6
      },
      right: {
         val: 9
      }
   }
}

var invertTree = function(root) {
   if(!root) return root

   let temp = root.left

   root.left = root.right
   root.right = temp

   //why this had a problem ?????????
   // [root.left, root.right] = [root.right, root.left]

   invertTree(root.left)
   invertTree(root.right)

   return root
};