

console.log('playground')

const btn = document.getElementById('btn')
const accountEl = document.getElementById('account')

btn.onclick = async () => {
   if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
   } else { 
      alert('Please install MetaMask first');
      return
   }

   const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
   const account = accounts[0];

   accountEl.textContent  = account
}

// const all = []

const permute = (arr, res = '', all= []) => {
   if(!arr.length) {
       all.push(Number(res))
   }

   for(let i = 0; i < arr.length; i++) {
       permute([...arr.slice(0, i), ...arr.slice(i + 1)], res + arr[i], all)
      //  res = res.slice(0, -1)
   }

   return all
}

var subsetsWithDup = function(nums) {
   const allPossibility = (1 << nums.length) - 1
   const res = []

   for(let i = 0; i < allPossibility; i++) {
       const sub = []

        for(let j = 0; j < nums.length; j++){
            if((i >> j) & 1) {
                sub.push(nums[j])
            }
        }

        res.push(sub)
   }

   return res 
};