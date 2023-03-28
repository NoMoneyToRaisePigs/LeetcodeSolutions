/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
   const allScenarios = (1 << nums.length) - 1
   let min = Number.MAX_SAFE_INTEGER

   for(let i = 0; i < allScenarios; i++) {
       const combo = []

       for(let j = 0; j < nums.length; j++) {
           if((i >> j) & 1) {
               combo.push(nums[j])
           }
       }

       const sum = combo.reduce((acc, cur) => acc += cur,0)
   
      if (sum >= target) {
         console.log(combo)   
         min = Math.min(combo.length, min)
       }
   }

   return min === Number.MAX_SAFE_INTEGER ? 0 : min
};


/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLenSlideWindow = function(target, nums) {
   let left = 0
   let right = 0

   let sum = 0
   let min = Number.MAX_SAFE_INTEGER

   while(true) {
      if (right === nums.length && sum < target) { 
         break
      }

       if(sum >= target && left <= right) {
          min = Math.min(right - left, min)
          sum -= nums[left]
         left++
       } else {
            sum += nums[right]
           right++
       }
   }

   return min
};