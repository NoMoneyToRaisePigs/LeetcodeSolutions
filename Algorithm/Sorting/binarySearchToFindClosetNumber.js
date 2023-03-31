//nums is sorted array

function binarySearchToFindClosetNumber(nums, target) { 
   if (target < nums[0]) return nums[0]
   if (target > nums[nums.length - 1]) return nums[nums.length - 1]
   

   const getClosestVal = (leftVal, rightVal, target) => { 
      if (target -  leftVal >= rightVal - target) {
         return rightVal
      } else { 
         return leftVal
      }
   }

   const binarySearch = (arr) => { 
      if (!arr.length) return

      const middleIndex = Math.floor(arr.length / 2)
   
      if (target === arr[middleIndex]) { 
         return arr[middleIndex]
      } 

      if (target < arr[middleIndex]) {
         if (middleIndex - 1 >= 0 && target > arr[middleIndex - 1]) { 
            return getClosestVal(arr[middleIndex - 1], arr[middleIndex], target)
         }

         return binarySearch(arr.slice(0, middleIndex))
      } else { 
         if (middleIndex + 1 < arr.length && target < arr[middleIndex + 1]) { 
            return getClosestVal(arr[middleIndex], arr[middleIndex + 1], target)
         }

         return binarySearch(arr.slice(middleIndex))
      }
   }


   return binarySearch(nums)
}