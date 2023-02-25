function _throttle(func, time) { 
   let timePassed = true

   return (...args) => { 
      if (timePassed) { 
         timePassed = false

         setTimeout(() => {
            timePassed = true
         }, time);

         return func(args)
      }
   }
}


function _debounce(func, time) { 
   let event = null
   
   return (...args) => { 
      clearTimeout(event)

      event = setTimeout(() => {
         func(...args)

      }, time);
   }
}