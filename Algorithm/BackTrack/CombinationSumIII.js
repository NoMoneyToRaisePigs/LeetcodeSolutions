// https://leetcode.com/problems/combination-sum-iii/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
   const res = []

   const bt = (start, combo) => {
      for (let i = start; i <= 9; i++) {
          const sum = combo.reduce((acc, cur) => acc += cur, 0)

          if (i > n) { 
             combo.pop()
             break
            // continue
            // break
          } 
          if (combo.length > k) { 
             combo.pop()
             break
            //  continue
            // break
          } 
          if (sum > n) { 
             combo.pop()
             break
            //  break
          } 

           if(combo.length ===k && sum === n) {
              res.push(combo.slice())
              combo.pop()
              break
           }

           bt(i + 1, [...combo, i])
         //   combo.pop()
       }
   }

   bt(1, [], n)

   return res
};



/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3BinaryCombo = function(k, n) {
   const max = Math.min(9, n)
   const allScenario = (1 << max) - 1
   const arr = []

   const result = []

   let index = 1
   while(index <= max) {
       arr.push(index)
       index++
   }



   for(let i =0; i <= allScenario; i++) {
       const combo = []
      
       for(let j = 0; j < arr.length; j++) {
           if((i >> j) & 1) {
               combo.push(arr[j])
           }
       }

       if(combo.length === k && combo.reduce((acc,cur) => acc += cur, 0) == n) {
           result.push(combo)
       }
   }

   return result
};
