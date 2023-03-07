//this is to see that proxy is actually lazy.

const zzz = {
   a: {
      aa: 10,
      bb: 20
   },
   b: 2
}


function createProxy(target) { 
   return new Proxy(target, {
      get(target, key, receiver) {
         let res = Reflect.get(target, key, receiver)

         if (typeof res === 'object') {
            return createProxy(res)
         } else { 
            return res * 20
         }
      },
      set(target, key, value, receiver) { 
   
      },
   })
}

const zzzProxy = createProxy(zzz)