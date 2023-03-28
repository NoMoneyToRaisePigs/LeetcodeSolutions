//53. https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
   let max_so_far = Number.MIN_SAFE_INTEGER
   let max_ending_here = Number.MIN_SAFE_INTEGER

   for(let i = 0; i < nums.length; i++) {
       const num = nums[i]

       max_ending_here += num

       if(max_ending_here < num) {
           max_ending_here = num
       }

       max_so_far = Math.max(max_so_far, max_ending_here)
   }

   return max_so_far
};
