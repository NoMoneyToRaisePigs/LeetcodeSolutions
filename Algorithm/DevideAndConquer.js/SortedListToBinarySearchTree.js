/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
   if(!head) return head

   const sortedArr = []


   while(head) {
       sortedArr.push(head.val)

       head = head.next  
   }


   const divideAndConquer = (arr) => {
       if(!arr.length) return

       const middleIndex = Math.floor(arr.length / 2)

       return new TreeNode(
           arr[middleIndex], 
           divideAndConquer(arr.slice(0, middleIndex)),
           divideAndConquer(arr.slice(middleIndex + 1)),
       )
   }

   return divideAndConquer(sortedArr)
};