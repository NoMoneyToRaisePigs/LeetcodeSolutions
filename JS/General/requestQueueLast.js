const queue = []

function fakeApi(url) {
   return new Promise((resolve, reject) => {
      console.log('you just called the fake api')
      setTimeout(() => {
         resolve(`api data from ${url}`)
      }, 1000);
   })
}

function queueRequest(request) { 
   queue.push(request)

   return new Promise((resolve, reject) => { 
      request.then((result) => { 
         if (queue[queue.length - 1] === request) {
            resolve(result)
         } else { 
            return reject(new Error('not latest'))
         }
      })
   })
}


queueRequest(fakeApi('test 1')).then((x) => console.log(x))
queueRequest(fakeApi('test 2')).then((x) => console.log(x))
queueRequest(fakeApi('test 3')).then((x) => console.log(x))