// https://leetcode.com/problems/maximum-average-subarray-i/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverageBrute = function(nums, k) {
   const startRange = nums.length - k + 1
   let max = -1000000

   for (let i = 0; i < startRange; i++){
      const arr = nums.slice(i, i + k)
       const sum = arr.reduce((acc,cur) => acc += cur, 0)

       max = Math.max(sum, max)
   }

   return max / k
};


var findMaxAverageWindow = function(nums, k) {

   let sum = 0
   let lastSum =0

   for (let i = 0; i < nums.length; i++){
      if (i < k) { 
         sum += nums[i]
         lastSum += nums[i]
      }

      if (i >= k) { 
         lastSum = lastSum - nums[i - k] + nums[i]
         sum = Math.max(sum, lastSum)
      }
   }

   return sum / k
};