var minPathSum = function(grid, cache = []) {
   if(grid.length === 1) {
       return grid[0].reduce((acc, cur) => acc += cur, 0)
   } 

   if(grid[0].length === 1) {
       return grid.reduce((acc,cur) => acc += cur[0], 0)
   }

   const m = grid.length - 1
   const n = grid[0].length - 1

   if (cache[m] && cache[m][n]) {
      return cache[m][n]
   } 

   const upper = minPathSum(grid.slice(0, -1), cache)
   const left = minPathSum(grid.map(x => x.slice(0, -1)), cache)

   const min = Math.min(upper, left)
   const result = min + grid[m][n]

   cache[m] = cache[m] ? cache[m] : []
   cache[m][n] = result

   return result
};