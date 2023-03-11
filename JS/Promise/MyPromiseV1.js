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

      // this.resolveWaitingList.forEach(func => { 
      //    func(result)
      // })

      //V1
      this.resolveWaitingList.reduce((acc, cur, index, array) => { 
         if (acc instanceof MyPromise) {
            acc.resolveWaitingList = acc.resolveWaitingList.concat(array.splice(index))
         } else { 
            return cur(acc)
         }
      }, result)
      //V1
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
         //V1
         this.resolveWaitingList.push(func)
         return this
         //
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
   return new MyPromise((resolve, reject) => { 
      resolve('456')
   })
}).then(res => { 
   console.log(res)
})
