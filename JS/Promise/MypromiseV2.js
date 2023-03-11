//there's a very good example here: https://medium.com/swlh/implement-a-simple-promise-in-javascript-20c9705f197a

console.log('start')

const STATUS = {
   pending: 'PENDING',
   fullfilled: 'FULLFILLED',
   rejected: 'REJECTED'
}

class MyPromise { 

   currentStatus = status.pending
   value = undefined
   failure = null

   resolveWaitingList = []
   rejectWaitlingList = []

   constructor(func) { 
      this.currentStatus = STATUS.pending
      func(this.resolve.bind(this), this.reject.bind(this))
   }

   resolve(result) { 
      this.value = result
      this.currentStatus = STATUS.fullfilled

      this.resolveWaitingList.forEach(func => { 
         func(result)
      })
   }

   static resolve(value) { 
      return new MyPromise((resolve, reject) => { 
         resolve(value)
      })
   }

   reject(result) { 
      this.failure = result
      this.currentStatus = STATUS.rejected

      this.rejectWaitlingList.forEach(func => { 
         func(result)
      })
   }

   then(func) { 
      let thenResult = undefined

      if (this.currentStatus === STATUS.pending) {
         let self = this

         return new MyPromise((res, rej) => { 
            self.resolveWaitingList.push((result) => { 
               let x = func(result)
               x instanceof MyPromise ? x.then(res) : res(x)
            })
         })
      }
      
      if (this.currentStatus === STATUS.fullfilled){ 
         thenResult = func(this.value)
         return MyPromise.resolve(thenResult)
      }
   }

   catch(func) { 
      if (this.currentStatus === STATUS.rejected) {
         func(this.failure)
      }

      if (this.currentStatus === STATUS.pending) {
         this.rejectWaitlingList.push(func)
      }
   }
}

// write your own Promise -------------

console.log('TESTING MyPromise------------')

//MyPromise Test
const MyPromise1 = new MyPromise((resolve, reject) => { 
   setTimeout(() => {
      resolve('123')
   }, 2000);
})


MyPromise1.then(res => {
   console.log(res)
   return new MyPromise((resolve, reject) => { 
      setTimeout(() => {
         console.log('another 2 seconds')
         resolve('yyyyyy')
      }, 2000);
   })
}).then((res) => { 
   console.log(res)
})

