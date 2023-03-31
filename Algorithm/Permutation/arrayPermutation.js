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

function arrayPermute2(array) { 
   const result = []

   const dfs = (arr, permute = []) => { 
      if (permute.length === array.length) { 
         result.push(permute)
         return
      }

      for (let i = 0; i < arr.length; i++) { 
         
         dfs([...arr.slice(0, i), ...arr.slice(i + 1)], [...permute, arr[i]])

         permute.pop()
      }
   }

   dfs(array.slice())

   return result
}

function permuteV(arr, combo = [], res = []) { 
   if(arr.length === 0) {
      res.push(combo)
     return
  }

  for(let i = 0; i < arr.length; i++) {
      const rest = [...arr.slice(0, i), ...arr.slice(i + 1)]
      permuteV(rest, [...combo, arr[i]].slice(), res)
      // combo.pop()
   }
   
   return res
}