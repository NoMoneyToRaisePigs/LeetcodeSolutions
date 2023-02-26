var SwapNodesInPairs = function(head) {
    if(!head || !head.next) return head

    let first = head
   let second = first?.next
   let temp = second

    while(first && second){
       first.next = second.next

       second.next = first


       first = first.next
       second = first?.next
    }

    return temp
};

var SwapNodesInPairs_V2 = function(head) {
   if(!head || !head.next) return head

   let first = head
   let second = first?.next
   let temp = second
   let previousLink = null


   while (first && second) {
      if (previousLink != null) { 
         previousLink.next = second
      }

      first.next = second.next

      second.next = first

      previousLink = first


      first = first.next
      second = first?.next
   }

   return temp
};