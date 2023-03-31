console.log('xxx')

const outter = document.getElementById('outter')
const inner = document.getElementById('inner')

outter.addEventListener('click', function () { 
   console.log('outter triggered')
}, true)

inner.addEventListener('click', function () { 
   console.log('inner triggered')
}, true)