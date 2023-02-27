/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var RemoveDuplicatesfromSortedListII7 = new ListNode(5, null)
var RemoveDuplicatesfromSortedListII6 = new ListNode(4, RemoveDuplicatesfromSortedListII7)
var RemoveDuplicatesfromSortedListII5 = new ListNode(4, RemoveDuplicatesfromSortedListII6)
var RemoveDuplicatesfromSortedListII4 = new ListNode(3, RemoveDuplicatesfromSortedListII5)
var RemoveDuplicatesfromSortedListII3 = new ListNode(3, RemoveDuplicatesfromSortedListII4)
var RemoveDuplicatesfromSortedListII2 = new ListNode(2, RemoveDuplicatesfromSortedListII3)
var RemoveDuplicatesfromSortedListII1 = new ListNode(1, RemoveDuplicatesfromSortedListII2)


var RemoveDuplicatesfromSortedListIITest3 = new ListNode(2, null)
var RemoveDuplicatesfromSortedListIITest2 = new ListNode(2, RemoveDuplicatesfromSortedListIITest3)
var RemoveDuplicatesfromSortedListIITest1 = new ListNode(1, RemoveDuplicatesfromSortedListIITest2)

// Test Cases
//1112  2333  111 

var RemoveDuplicatesfromSortedListII = function(head) {
   if(!head || !head.next) return head

   let temp = head
   let repeatMap = {}

   while(temp.next){
       if(temp.val === temp.next.val){
           repeatMap[temp.val] = true
       }

       temp = temp.next
   }


   temp = head

   let result = null

   while(temp.next){
      if (repeatMap[temp.next.val]) {
         let internalTemp = temp.next

           while(internalTemp){
              if (!repeatMap[internalTemp.val]) { 
                 temp.next = internalTemp
                 break
              }

              if (!internalTemp.next) { 
                 temp.next = null
                 break
              }

               internalTemp = internalTemp.next
           }
       } else{
           result = result ? result : temp
       }

      if (temp.next) {
         temp = temp.next
      } else { 
         break
      }
   }

   return result ?? head

};

var RemoveDuplicatesfromSortedListII_V2 = function(head) {
   if(!head || !head.next) return head

   let temp = head
   let repeatMap = {}

   while(temp.next){
       if(temp.val === temp.next.val){
           repeatMap[temp.val] = true
       }

       temp = temp.next
   }


   temp = head

   let result = null

   while(temp){
      if (!repeatMap[temp.val]) { 
         result = result ?? temp
      }

      let internal = temp.next

      while (internal) { 
         // if (!repeatMap[internal.next?.val]) {
         //    break
         // }

         if (repeatMap[internal.val]) {
            internal = internal.next
         } else { 
            break
         }

         // internal = internal.next
      }

      temp.next = internal
      temp = temp.next
   }

   return result
};