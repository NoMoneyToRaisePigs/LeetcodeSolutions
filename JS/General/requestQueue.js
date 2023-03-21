
const requestQueue = new Map

function fakeApi(url) {
   return new Promise((resolve, reject) => {
      console.log('you just called the fake api')
      setTimeout(() => {
         resolve(`api data from ${url}`)
      }, 1000);
   })
}



function request(url) {
   let existingRquest = requestQueue.get(url)

   if (existingRquest) {
      return existingRquest
   } else {
      existingRquest = fakeApi(url)

      existingRquest.then(res => {
         requestQueue.delete(url)
      })

      requestQueue.set(url, existingRquest)
   }

   return existingRquest
}


request('www.baidu.com').then(res => console.log(res))
request('www.baidu.com').then(res => console.log(res))
request('www.baidu.com').then(res => console.log(res))

setTimeout(() => {
   request('www.baidu.com').then(res => console.log(res))
}, 3000);

