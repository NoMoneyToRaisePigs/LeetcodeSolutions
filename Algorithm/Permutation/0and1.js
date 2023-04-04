function getAllCombos(arr) { 
   const allPossibilities = (1 << arr.length) - 1

   for (let i = 0; i <= allPossibilities; i++) { 
      const combo = []

      for (let j = 0; j < arr.length; j++) {
         if ((i >> j) & 1) { 
            combo.push(arr[j])
         }
      }

      console.log(combo)
   }
}

function quickSort(arr) { 
   if(arr.length <= 1) return arr

   const pivot = arr[0]

   const left = []
   const right = []

   for (let i = 1; i < arr.length; i++) { 
      const num = arr[i]

      if (num > pivot) {
         right.push(num)
      } else { 
         left.push(num)
      }
   }

   return [...quickSort(left), pivot, ...quickSort(right)]
}