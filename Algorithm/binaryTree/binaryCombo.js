function findAllCombsBinary(arrs) { 

   let allCombs = (1 << arrs.length) - 1;
   let result = [];

   for (let i = 0; i < allCombs; i++) { 
      let selected = '';

      for (let j = 0; j < arrs.length; j++) { 
         if (i >> j & 1 == 1) {
            // selected += arrs[j];
            selected += '1'
         } else { 
            selected += '0'
         }
      }

      result.push(selected);
   }

   return result;
}