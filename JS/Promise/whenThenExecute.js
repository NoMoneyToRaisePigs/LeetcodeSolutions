let aaa = null

const myPromise = new Promise((resolve, reject) => { 
   console.log('promise constructor')
   aaa = setTimeout(() => {
      console.log('just before resolve')
      resolve('123')
   }, 3000);
})


setTimeout(() => {
   console.log('clear')
   // clearTimeout(aaa)
}, 1000);

myPromise.then((res) => { 
   console.log('just before then')
   console.log(res)
})