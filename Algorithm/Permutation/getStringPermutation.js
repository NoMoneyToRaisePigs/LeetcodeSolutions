function getStringPermutation(str) { 
   const result = []
   function cut (str, n) { return str.slice(0, n) + str.slice(n + 1)}

   const permute = (s, combo = []) => { 
      if (!s) { 
         result.push(combo.join(''))
         return
      }

      for (let i = 0; i < s.length; i++) { 
         let letter = s[i]
         
         permute(cut(s, i), [...combo, letter])
      }
   }

   permute(str)
   return result
}



const getStringPermutationV2 = (str = '') => {
   if (!!str.length && str.length < 2 ){
      return str
   }
   const arr = [];
   for (let i = 0; i < str.length; i++){
      let char = str[i]
      if (str.indexOf(char) != i)
         continue
         let remainder = str.slice(0, i) + str.slice(i + 1, str.length)
         for (let permutation of getStringPermutationV2(remainder)){
            arr.push(char + permutation)
         }
   }
   return arr
}