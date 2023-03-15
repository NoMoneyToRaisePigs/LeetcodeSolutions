setTimeout(async () => {
   const data = await getData()
   console.log('did you wait')
}, 1000);


async function getData() { 
   const data = await returnDataAfter3Seconds()

   return data
}


function returnDataAfter3Seconds() { 
   return new Promise((resolve) => { 
      setTimeout(() => {
         resolve('the data')
      }, 3000);
   })
}