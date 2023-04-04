//119 https://leetcode.com/problems/pascals-triangle-ii/description/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
   if(rowIndex === 0) return [1]

   if(rowIndex === 1) return [1,1]

   const lineAbove = getRow(rowIndex - 1)

   return [0, ...lineAbove].reduce((acc, cur, index, arr) => {
       acc[index] = arr[index] + (arr[index + 1] || 0)
       return acc
   }, [])
};