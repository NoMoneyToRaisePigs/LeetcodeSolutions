/**
 * @param {number[]} nums
 * @return {boolean}
 */
var jumpGame = function (nums, cache = {}) {
   const length = nums.length

   if(length == 1){
       return nums[0] >= 0
   }

   if (cache[nums.length] != undefined) { 
      return cache[nums.length]
   }

   const before = nums.slice(0, -1)

   const result = before.some((item, index, arr) => {
      const subArr = arr.slice(0, index + 1)
      const subArrLength = subArr.length

      const subResult = jumpGame(subArr, cache) && subArr[subArrLength - 1] >= length - subArrLength
      //cache[subArrLength] = subResult
      return subResult
   })

   cache[before.length] = result
   return result
};