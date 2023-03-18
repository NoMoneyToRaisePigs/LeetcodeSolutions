/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
   this.next = (next === undefined ? null : next)
}

var RotateListHead5 = new ListNode(5, null)
var RotateListHead4 = new ListNode(4, RotateListHead5)
var RotateListHead3 = new ListNode(3, RotateListHead4)
var RotateListHead2 = new ListNode(2, RotateListHead3)
var RotateListHead1 = new ListNode(1, RotateListHead2)

var RotateListBy = function(head, k) {
   if(!head || !head.next){
      return head
  }

  let length = 1
 let last = head

 const getLengthAndLast = () => {
     while(last.next){
         length++
         last = last.next
     }
 }

 getLengthAndLast()

 k = length - k % length

 let index = 1;
 let temp = head;
 let result = head

 while(temp.next){
     if(index != k){
         temp = temp.next
         index++
     }
     else{
         last.next = head
         result = temp.next
         temp.next = null

         break
     }
 }

 return result
};