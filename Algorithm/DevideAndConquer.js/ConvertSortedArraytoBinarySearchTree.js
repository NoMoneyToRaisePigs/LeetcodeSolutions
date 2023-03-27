/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


function TreeNode(val, left, right) {
   this.val = (val===undefined ? 0 : val)
   this.left = (left===undefined ? null : left)
   this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
   if(!nums.length) return null
   if(nums.length === 1) return new TreeNode(nums[0])

   const middleIndex = Math.floor(nums.length / 2)
   const middleVal = nums[middleIndex]

   const root = new TreeNode(middleVal)

   const sub1 = sortedArrayToBST(nums.slice(0, middleIndex))
   const sub2 = sortedArrayToBST(nums.slice(middleIndex + 1))

   root.left = sub1
   root.right = sub2

   // if (sub1 == null && sub2 == null) {

   // } else if (sub1 == null && sub2 != null) {
   //    root.right = sub2
   // } else if (sub2 == null && sub1 != null) {
   //    root.right = sub1
   // } else { 
   //    if(sub1.val > sub2.val){
   //       root.right = sub1
   //       root.left = sub2
   //   } else {
   //       root.right = sub2
   //       root.left = sub1
   //   }
   // }

   return root
};