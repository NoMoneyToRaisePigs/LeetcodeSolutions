

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