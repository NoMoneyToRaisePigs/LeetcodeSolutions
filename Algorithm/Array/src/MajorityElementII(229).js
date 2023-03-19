// https://leetcode.com/problems/majority-element-ii/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
export default function majorityElement(nums) {
   const repeat = nums.length / 3

   const map = {}
   const result = []

   for(let i = 0; i < nums.length; i++){
       if(map[nums[i]]){
           map[nums[i]]++
       } else {
           map[nums[i]] = 1
       }
   }

   Object.keys(map).forEach(x => {
      if (Number(map[x]) > repeat) { 
         result.push(x)
      }
   })

   return result
};