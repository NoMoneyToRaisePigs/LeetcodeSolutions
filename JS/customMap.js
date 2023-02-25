function customMap(func) { 
   const result = []

   for (let i = 0; i < this.length; i++) { 
      const transformed = func(this[i], i, this)
      result.push(transformed)
   }

   return result
}

Array.prototype.customMap = customMap