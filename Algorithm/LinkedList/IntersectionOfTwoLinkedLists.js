/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var IntersectionOfTwoLinkedListsCommon2 = new ListNode(4, null)
var IntersectionOfTwoLinkedListsCommon1 = new ListNode(2, IntersectionOfTwoLinkedListsCommon2)


var IntersectionOfTwoLinkedListsB1 = new ListNode(3, IntersectionOfTwoLinkedListsCommon1)

var IntersectionOfTwoLinkedListsA4 = new ListNode(2, IntersectionOfTwoLinkedListsCommon2)
var IntersectionOfTwoLinkedListsA3 = new ListNode(7, IntersectionOfTwoLinkedListsCommon1)
var IntersectionOfTwoLinkedListsA2 = new ListNode(9, IntersectionOfTwoLinkedListsA3)
var IntersectionOfTwoLinkedListsA1 = new ListNode(1, IntersectionOfTwoLinkedListsA2)

var IntersectionOfTwoLinkedLists = function(headA, headB) {
   let tempA = headA
   let tempB = headB
   let loopTimeA = 0
   let loopTimeB = 0

   while(loopTimeA < 2 && loopTimeB < 2){
       if(tempA === tempB){
         return tempA
       }

      if (tempA == null) {
         tempA = headB
         loopTimeA++
      } else { 
         tempA = tempA.next
      }

      if (tempB == null) {
         tempB = headA
         loopTimeB++
      } else { 
         tempB = tempB.next
      }
   }

   return null
};