// https://leetcode.com/problems/house-robber/


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums, cache = {}) {
   if(nums.length === 1){
       return nums[0]
   }

   if(nums.length === 2) {
       return Math.max(nums[0], nums[1])
   }

   const length = nums.length

   const result = Math.max(rob(nums.slice(0, length - 2), cache) + nums[length - 1], rob(nums.slice(0, length - 1),cache))

   cache[length] = result

   return result 

};