function curryAdd(...args) { 
   const sum = args.reduce((acc, cur) => acc += cur, 0)

   return (...params) => { 
      if (!params.length) {
         return sum
      } else { 
         return curryAdd(...[...args, ...params])
      }
   }
}