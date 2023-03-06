function handleClick() { 
   console.log('me handle click')
}


const throttledHandelClick = _throttle(handleClick, 2000)
const debounceddHandelClick = _debounce(handleClick, 2000)



// -----mimic vue _openBlock
function xxxx() { 
   return (a(), b())
}

function a() {
   console.log('func a')
   return 'a'
}
function b() { 
   console.log('func b')
   return 'b'
}


xxxx()