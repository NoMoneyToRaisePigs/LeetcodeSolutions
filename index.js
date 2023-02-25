function handleClick() { 
   console.log('me handle click')
}


const throttledHandelClick = _throttle(handleClick, 2000)
const debounceddHandelClick = _debounce(handleClick, 2000)