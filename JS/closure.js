console.log('closure')

// console.log(i)
// console.log(b)


for (var i = 0; i < 5; i++) { 
   (function(i) { 
      setTimeout(() => {
         console.log(new Date, i)
      }, 1000);
   })(i)
}

console.log(new Date, i)


var b;

console.log(b)