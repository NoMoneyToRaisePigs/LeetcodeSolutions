function barrelSort(arr) { 
   const barrel = []

   for (let i = 0; i < arr.length; i++) { 
      let num = arr[i]
      barrel[num] = barrel[num] ? barrel[num] : []

      barrel[num].push(num)
   }

   return barrel.filter(x => x).flat()
}