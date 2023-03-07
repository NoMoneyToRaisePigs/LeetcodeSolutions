// let price = 5
// let quantity = 2
// let total = price * quantity
// console.log(`total is ${total}`)

// price = 20

// console.log(`total is ${total}`)


// let dep = new Set()

// let effect =  () => {
//    total = price * quantity
// }


// function track() {
//    dep.add(effect)
// }

// function trigger() {
//    dep.forEach(effect => effect())
// }


// track()
// trigger()


// -----------------------------------------------------------------------

// let product = { price: 5, quantity: 2 }

// let effect =  () => {
//    total = product.price * product.quantity
// }

// const depsMap = new Map()

// function track(key) {
//    let dep = depsMap.get(key)

//    if (!dep) {
//       depsMap.set(key, (dep = new Set()))
//    }

//    dep.add(effect)
// }

// function trigger(key) {
//    let dep = depsMap.get(key)

//    if (!dep) return
   
//    dep.forEach(effect => effect())
// }

// track('quantity')
// effect


// -----------------------------------------------------------------------

//let product = { price: 5, quantity: 2 }

// let total = 0


let activeEffect = null
const targetMap = new WeakMap()

function effect(eff) { 
   activeEffect = eff
   let result = activeEffect()
   activeEffect = null
   return result
}

function track(target, key) { 
   if(!activeEffect) return

   let depsMap = targetMap.get(target)

   if (!depsMap) { 
      targetMap.set(target, (depsMap = new Map()))
   }

   let dep = depsMap.get(key)

   if (!dep) { 
      depsMap.set(key, (dep = new Set()))
   }

   dep.add(activeEffect)
}


function trigger(target, key) { 
   let depsMap = targetMap.get(target)

   if (!depsMap) return
      
   const deps = depsMap.get(key)

   if (!deps) return
   
   deps.forEach(effect => effect())
}

// track(product, 'quantity')
// effect()



function reactive(target) { 
   const handler = {
      get(target, key, receiver) { 
         let result = Reflect.get(target, key, receiver)
         track(target, key)
         return result
      },
      set(target, key, value, receiver) { 
         let oldValue = Reflect.get(target, key, receiver)
         let setSucceed = Reflect.set(target, key, value, receiver)

         if (setSucceed && oldValue !== value) { 
            trigger(target, key)
         }

         return setSucceed
      }
   }

   return new Proxy(target, handler)
}

let product = reactive({ price: 5, quantity: 2 })
const salePrice = computed(() =>  product.price * 0.9)
const total = computed(() => salePrice.value * product.quantity)


// effect(() => {
//    total = salePrice.value * product.quantity
// })

// effect(() => { 
//    salePrice.value = product.price * 0.9
// })

// console.log(total, salePrice)

// product.quantity = 3

// console.log(total, salePrice)

// product.price = 10 

// console.log(total, salePrice)


// function ref(initialValue) {
//    return reactive({value: initialValue})
// }

// let user = {
//    firstName: '',
//    lastName: '',

//    get fullName() { 
//       return `${this.firstName} ${this.lastName}`
//    },

//    set fullName(value) { 
//       [this.firstName, this.lastName] = value.split(' ')
//    },
// }

function ref(raw) { 
   const r = {
      get value() { 
         track(r, 'value')
         return raw
      },
      set value(newVal) { 
         if (newVal !== raw) { 
            raw = newVal
            trigger(r, 'value')
         }
      },
   }

   return r
}


// console.log(total, salePrice.value)

// product.quantity = 3

// console.log(total, salePrice.value)

// product.price = 10

// console.log(total, salePrice.value)

// function computed(func) {
//    const computedRef = {}
//    const internalEff = () => {
//       computedRef.value = func()
//    }

//    effect(internalEff)

//    const proxy = new Proxy(computedRef, {
//       get(target, key, receiver) {
//          track(ref, 'value')

//          return Reflect.get(computedRef, 'value', receiver)
//       },
//       set(newVal) {
//          if (newVal !== computedRef.value) {
//             trigger(target, 'value')

//             Reflect.set(computedRef, 'value', newVal, receiver)
//          }
//       },
//    })

//    return proxy
// }


function computed(getter) {
   const result = ref()

   effect(() => { result.value = getter() })
   
   return result
}

const xxx = computed(() => salePrice.value * 10)

console.log('xxx:', xxx.value)

salePrice.value = 999

console.log('xxx:', xxx.value)