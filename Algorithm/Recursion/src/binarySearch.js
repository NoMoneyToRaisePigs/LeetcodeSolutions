export default function binarySearch(arr, target) { 
   const sortedArr = arr.sort((a, b) => a - b)

   const search = (arr, target) => { 
      if (!arr.length) return 
      
      const middleIndex = Math.floor(arr.length / 2)
      const middleVal = arr[middleIndex]

      if (middleVal === target) {
         return middleVal
      } else if (middleVal > target) {
         return search(arr.slice(0, middleIndex), target)
      } else { 
         return search(arr.slice(middleIndex + 1), target)
      }
   }

   return search(sortedArr, target)
}