function allContiguousSubArrayCombinationOfArray(arr, start, output) { 
   // const comboRef = [...combo, arr[start]]
   output += "(" + arr[start];

   for (let i = start + 1; i < arr.length; i++) { 
      allContiguousSubArrayCombinationOfArray(arr, i, output + "),")
      output += "," + arr[i];
   }

   console.log(output + ')')
}

function allSubArrayCombo(array) { 
   const res = []

   const recursion = (arr, combo = []) => { 
      if (!arr.length) {
         res.push(combo)
      } 

      for (let i = 1; i <= arr.length; i++) { 
         recursion(arr.slice(i), [...combo, arr.slice(0, i)])
      }
   }

   recursion(array)

   return res
}