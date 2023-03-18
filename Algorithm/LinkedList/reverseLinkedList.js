// https://leetcode.com/problems/reverse-linked-list/

// var reverseLinkedList4 = new ListNode(2, null)
// var reverseLinkedList3 = new ListNode(7, reverseLinkedList4)
// var reverseLinkedList2 = new ListNode(9, reverseLinkedList3)
// var reverseLinkedList1 = new ListNode(1, reverseLinkedList2)

var reverseLinkedList1 = {
   val: 1,
   next: {
      val: 9,
      next: {
         val: 7,
         next: {
            val: 2,
            next: null
         }
      }
   }
}

function reverseLinkedList(head) { 
   if (!head) return head
   if (!head.next) return head

   let temp = head
   let previous = null
   let originalNext = null
   
   while (temp) { 
      originalNext = temp.next

      temp.next = previous

      previous = temp
      
      temp = originalNext
   }

   //return temp is wrong, since the temp is already null after the while loop, but previous would be the last node.
   return previous
}