Function.prototype._call = function(ctx, ...args) { 
   let obj = {
      ...ctx,
      func: this,
   }

   return obj.func(...args)
}

var myCtx = {
   name: 'nannan'
}

var testObj = {
   name: 'gaofan',
   greet: function (str) { 
      console.log(`Hello, ${this.name}, ${str}`)
   }
}