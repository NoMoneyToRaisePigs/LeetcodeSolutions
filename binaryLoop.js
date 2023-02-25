const binaryLoop = (n) => { 
   const base = (2 ** (n)) - 1

   for (let i = 0; i < n; i++) { 
      const binary = Number(base >> i)

      console.log('-----', Number(binary).toString(2))

      for (let j = 0; j < base; j++) { 
         if (j & binary) { 
            console.log(Number(j).toString(2))
         }
      }
   }
}