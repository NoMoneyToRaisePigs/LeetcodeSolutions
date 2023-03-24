// Bank accounts
// Provide an implementation for a bank account API that supports the following operations:

// credit(account_id, amount) # Adds value to the given account, recording the timestamp. O(1)

// debit(account_id, amount) # Subtracts value from the given account, recording the timestamp. O(1)

// current(account_id) # Returns the current balance. O(1)

// # Returns the net change in account value between the given timestamps.
// # O(log M) M being the number of transactions for the account
// balance_change(account_id, exclusive_start_timestamp, inclusive_end_timestamp)


const hashMap = {
   '1': {
     selfIndex: 3,   // probably use this instead of a global index to avoid non-consecutive indice
     balance: 50,
     history: [
       //here we just use the auto-incremental to replace the real timestamp for simplicity
       {
         id: 1, //timestamp
         value: 150
       },
       {
         id: 2, //timestamp
         value: 250
       },
       {
         id: 3, //timestamp
         value: 350
       },
     ]
   },
   '2': {
     balance: 0,
     history: [],
   },
   '3': {
     balance: 0,
     history: [],
   },
 }
 
 
 
 let index = 0
 
 function credit(id, amount){
   if(!hashMap[id]) return 
 
   hashMap[id].balance += amount
 
   index++
 
   hashMap[id].history.push({
     id: index,
     value: hashMap[id].balance
   })
 }
 
 function debit(id, amount) {
   if(!hashMap[id]) return 
 
   hashMap[id].balance -= amount
 
   index++
 
   hashMap[id].history.push({
     id: index,
     value: hashMap[id].balance
   })
 }
 
 function current(id) {
   if(!hashMap[id]) return 
 
   return hashMap[id].balance
 }
 
 
 // in this method, since start is exclusive, using start + 1 is not correct if the incremental for this single user is not consecutive, to avoid this, we shouldn't use a global index, should have a index for each user, but again, for simplicity let's make it this way first
 function balance_change(id, start, end) {
   if(!hashMap[id]) return 
 
   const history = hashMap[id]?.history
 
   if(!history) return
 
   const binarySearch = (arr, target) => {
     const middle = Math.floor(arr.length / 2)
 
     if(!arr.length) return
 
     if(arr[middle].id === target) {
       return arr[middle].value
     }
 
     if(arr[middle].id > target) {
       return binarySearch(arr.slice(0, middle), target)
     }  else {
       return binarySearch(arr.slice(middle + 1), target)
     }
   }
 
   const endRes = binarySearch(history, end)
   const startRes = binarySearch(history, start + 1) //+1 here since it is exclusive, but again index needs to be conseuctive
 
   //console.log('start:', startRes)
   //console.log('end:', endRes)
 
   return endRes - startRes
 }
 
 console.log('------deposit 30')
 credit('2', 30)
 console.log(hashMap['2'])
 
 console.log('------deposit 40')
 credit('2', 40)
 console.log(hashMap['2'])
 
 console.log('------withdraw 10')
 debit('2', 10)
 console.log(hashMap['2'])
 
 console.log('------current balance')
 console.log(current('2'))
 
 console.log('-------balance change between 1(exclude) and 3(include)')
 console.log(balance_change('2', 1, 3))
 
 //now it should be working now with consecutive id per user.