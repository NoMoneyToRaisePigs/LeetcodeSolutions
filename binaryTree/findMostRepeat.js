// https://leetcode.com/problems/find-mode-in-binary-search-tree/


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
 * @return {number[]}
 */


var findModeTest = {
   val: 1,
   right: {
      val: 2,
      left: {
         val: 2
      }
   }
}

var findMode = function(root) {
   const map = {}

   const recurse = (node) => {
       if(!node) return

       if(map[node.val]){
           map[node.val]++
       } else {
           map[node.val] = 1
       }

       recurse(node.left)
       recurse(node.right)
   }

   recurse(root)

   let mostRepeat = -1
   const keys = Object.keys(map)

   for(let i =0; i < keys.length; i++){
       const num = map[keys[i]]

       mostRepeat = Math.max(num, mostRepeat)
   }

   return mostRepeat
};