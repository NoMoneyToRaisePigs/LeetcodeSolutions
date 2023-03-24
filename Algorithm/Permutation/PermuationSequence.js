/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
   const allPossibility = (1 << nums.length) - 1
   const res = []
   const resMap = {}

   for(let i = 0; i < allPossibility; i++) {
       const sub = []

        for(let j = 0; j < nums.length; j++){
            if((i >> j) & 1) {
                sub.push(nums[j])
            }
        }


       const key = sub.sort((a,b) => a - b).join('')
       if(!resMap[key]){
           resMap[key] = true
           res.push(sub)
       }
   }

   return [...res, nums] 
};