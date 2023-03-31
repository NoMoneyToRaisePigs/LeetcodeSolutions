/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
   const numsStr = nums.join('')
   const sortedNums = nums.sort((a ,b) => a - b)

   const all = []
   let result = null

   const permute = (arr, combo = [], next = false) => {
       if(arr.length === 0) {
           all.push(combo)

           if(next) {
              result = combo

           }

           if(combo.join('') === numsStr) {
               next = true
          }
          
          return
       }

       for(let i = 0; i < arr.length; i++) {
           const rest = [...arr.slice(0, i), ...arr.slice(i + 1)]
           permute(rest, [...combo, arr[i]], next)
           combo.pop()
       }
   }

   permute(sortedNums)

   if(result === null) {
       result = sortedNums
   }

   return result
};


function permuteV(arr, combo = [], res = []) { 
   if(arr.length === 0) {
      res.push(combo)
     return
  }

  for(let i = 0; i < arr.length; i++) {
      const rest = [...arr.slice(0, i), ...arr.slice(i + 1)]
      permuteV(rest, [...combo, arr[i]], res)
      // combo.pop()
   }
   
   return res
}