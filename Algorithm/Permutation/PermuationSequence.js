// 60 https://leetcode.com/problems/permutation-sequence/description/


/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
   const nArr = []

   for(let i = 1; i <=n; i++) {
       nArr.push(i)
   }

   const permute = (arr, res = '', all= []) => {
       if(!arr.length) {
           all.push(Number(res))
       }

       for(let i = 0; i < arr.length; i++) {
           permute([...arr.slice(0, i), ...arr.slice(i + 1)], res + arr[i], all)
           //  res = res.slice(0, -1)
       }

       return all
   }

   const res = permute(nArr).sort((a,b) => a - b)

   return res[k - 1].toString()
};