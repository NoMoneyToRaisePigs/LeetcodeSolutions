// 39.  https://leetcode.com/problems/combination-sum/


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
   if (!candidates || !candidates.length) return []
   
   candidates = candidates.filter(x => x <= target).sort((a,b) => a - b)

   const result = []
   const resultMap = {}

   const dfs = (arr, combo = []) => { 


      for (let i = 0; i < arr.length; i++) { 
         const newCombo = [...combo, arr[i]]

         const sum = newCombo.reduce((acc, cur) => acc += cur, 0)

         if(sum > target) break
   
         if (sum === target) { 
            const key = newCombo.sort((a, b) => a - b).join('')
            if (!resultMap[key]) { 
               result.push(newCombo)
               resultMap[key] = true
            }
            break
         }

         dfs(arr, newCombo)
         // combo.pop()
      }
   }

   dfs(candidates)

   return result
};