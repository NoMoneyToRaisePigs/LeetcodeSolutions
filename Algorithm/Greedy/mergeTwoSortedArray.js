function merge2SortedArray(arr1, arr2, result = []) {
   if (arr1.length === 0 && arr2.length === 0) {
      return result
   }
   else if (arr1.length === 0 && arr2.length > 0) {
      return result.push(...arr2)
   }
   else if (arr1.length > 0 && arr2.length === 0) {
      return result.push(...arr1)
   } else { 
      const x = arr1.shift()
      const y = arr2.shift()
   
      if (x < y) {
         result.push(x)
         arr2.unshift(y)
      } else { 
         result.push(y)
         arr1.unshift(x)
      }
      merge2SortedArray(arr1, arr2, result)
   }

   return result
}

function merge2SortedArrayV2(arr1, arr2) { 
   const result = []

   while (arr1.length && arr2.length) { 
      const arr1Num = arr1.shift()
      const arr2Num = arr2.shift()

      if (arr1Num < arr2Num) {
         result.push(arr1Num)
         arr2.unshift(arr2Num)
      } else { 
         result.push(arr2Num)
         arr1.unshift(arr1Num)
      }
   }

   if (arr1.length) { 
      result.push(...arr1)
   }

   if (arr2.length) { 
      result.push(...arr2)
   }

   return result
}
