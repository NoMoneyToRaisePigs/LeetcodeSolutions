function arrayPermute(array) { 
   const result = []

   const dfs = (arr, permute = []) => { 
      if (permute.length === array.length) { 
         result.push(permute)
         return
      }

      for (let i = 0; i < arr.length; i++) { 
         permute.push(arr[i])


         
         dfs(arr.slice(0, i).concat(arr.slice(i + 1)), permute.slice())

         permute.pop()
      }
   }

   dfs(array.slice())

   return result
}