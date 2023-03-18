
function index(str) {
   const strLength = str.length
   const combo = []
   const result = []

   function add(rest, combo) { 
      for (let i = 0; i < rest.length; i++) { 
         combo.push(rest[i])

         if (combo.length === strLength) {
           result.push(combo.join(''))
         } else { 
            const newStr = rest.slice(0, i) + rest.slice(i + 1)
            add(newStr, combo.slice())
         }
      }
   }

   for (let i = 0; i < str.length; i++) {
      const newStr = str.slice(0, i) + str.slice(i + 1)
      add(newStr, [str[i]])
   }

   return result
}

function PermuteString(value) { 
   const result = []

   const permute = (str, combo = []) => { 
      if (!str) { 
         result.push(combo.join(''))
      }
      
      for (let i = 0; i < str.length; i++) { 
         // combo.push(str[i])
   
         const newStr = str.slice(0, i) + str.slice(i + 1)
   
         permute(newStr, combo.concat([str[i]]))
      }
   }

   permute(value)

   return result
}