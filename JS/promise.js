console.log('start')

// let forget = false

// let getLv = new Promise((resolve, reject) => {
//    if (forget) {
//       reject(new Error('I just forget about it'))
//    } else {
//       resolve({
//          brand: 'lv',
//          price: 100000,
//          color: 'black'
//       })
//    }
// })


// getLv.then(result => {
//    console.log(result)
// })


// console.log('end')



// //Question 1:

// const promise = new Promise((resolve, reject) => {
//    console.log(1)
//    resolve()
//    console.log(2)
// })

// promise.then((result) => {
//    console.log(3)
// })

// console.log(4)

// //Answer :  1 2 4 3
// //Question 1 ------------------------------------

// //Question 2

// const promiseQ2 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve('success')
//       console.log('once')
//    }, 1000);
// })

// promiseQ2.then((res) => {
//    console.log(res)
// })

// promiseQ2.then((res) => {
//    console.log(res)
// })

// //Answer once success success
// //Question 2 -------------------------------------

// //Question 2

// const promiseQ3 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       reject('failed')
//       console.log('once')
//    }, 1000);
// })

// promiseQ3.then((res) => {
//    console.log(res)
// })

// promiseQ3.catch((res) => {
//    console.log(res)
// })

// promiseQ3.catch((res) => {
//    console.log(res)
// })
// //Answer once success success
// //Question 2 -------------------------------------


//write your own Promise

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

      // //V1
      // this.resolveWaitingList.reduce((acc, cur, index, array) => { 
      //    if (acc instanceof MyPromise) {
      //       acc.resolveWaitingList = acc.resolveWaitingList.concat(array.splice(index))
      //    } else { 
      //       return cur(acc)
      //    }
      // }, result)
      // //V1
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
         // //V1
         // this.resolveWaitingList.push(func)
         // return this
         // //
         return new MyPromise((res, rej) => { 
            self.resolveWaitingList.push((result) => { 
               let x = func(result)
               x instanceof MyPromise ? x.then(res) : res(x)
            })
         })


         // return new MyPromise((resolve, reject) => { 
         //    let thenRes = func()
         //    resolve(thenRes)
         // })
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

// MyPromise1.then(res => { 
//    console.log(res)
// })

// MyPromise1.catch(res => { 
//    console.log(res)
// })

// MyPromise.resolve('456').then((x) => { 
//    console.log(x)
// })
//MyPromise Test ------------------