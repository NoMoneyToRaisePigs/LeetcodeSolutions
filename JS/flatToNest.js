var flatToNestTest = [{ name: 'gf', id: 1 }, { name: 'nn', id: 2 }, { name: 'zz', id: 3 }]
var flatToNestTest2 = [{ name: 'gf', id: 1 }, { name: 'nn', id: 2 }, {name: 'zz', id: 3}]

function flatToNest(arr) { 
   if (!arr) return arr
   
   let res = flatToNestTest.shift()

   arr.reduce((acc, cur) => { 
      acc.child = cur
      return acc.child
   }, res)

   return res
}

function flatToNestV2(arr) { 
   const res = {}

   const recursion = (result, data) => { 
      if (data.length === 0) return
      
      result.child = data.shift()

      recursion(result.child, data)
   }

   recursion(res, arr)

   return res.child
}

const xxx = flatToNest(flatToNestTest.slice())
const yyy = flatToNestV2(flatToNestTest2.slice())
console.log(xxx)