function RemoveNthNodeFromEndOfList_Clumsy(head, n) {
   if(!head.next) return []

   let temp = head
   let length = 1


   while (temp.next) { 
      length++
      temp = temp.next
   }

   if (length == n) { 
      return head.next
   }

   let toChange = length - n

   let index = 1
   temp = head

   while (temp.next) { 
      if (toChange == index) {
         temp.next = temp.next?.next
         break
      } else { 
         index++
         temp = temp.next
      }
   }

   return head

}

function RemoveNthNodeFromEndOfList_TwoPointers(head, n) { 
   let slow = head
   let fast = head

   let gap = 0

   while (gap < n) { 
      gap++
      fast = fast.next
   }

   while (fast.next) {
      fast = fast.next
      slow = slow.next
   }

   slow.next = slow.next?.next

   return head
}