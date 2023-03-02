function quickSort(arr) { 
   if (!arr || arr.length <= 1) return arr
   
   const pivot = arr.pop()

   const left = []
   const right = []

   for (let i = 0; i < arr.length; i++) { 
      const num = arr[i]

      if (num < pivot) {
         left.push(num)
      } else { 
         right.push(num)
      }
   }

   return quickSort(left).concat([pivot], quickSort(right))
}