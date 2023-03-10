/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var AssignCookies = function(g, s) {
   const quickSort = (arr) => {
       if(arr.length <=1) return arr

       const pivot = arr.pop()
       const left = []
       const right = []

       for(let i = 0; i < arr.length; i++) {
           let num = arr[i]

           if(num < pivot){
               left.push(num)
           } else {
               right.push(num)
           }
       }

       return quickSort(left).concat([pivot], right)
   }

   const sortedG = quickSort(g)
   const sortedS = quickSort(s)

   let happyChild = 0

   // for(let i = 0; i < sortedG.length; i++){
   //     const greed = sortedG[i]
   //     const size = sortedS[i]

   //     if(size && greed <= size){
   //         happyChild++
   //     } else{
   //         sortedS.shift()
   //     }
   // }

   while(sortedS.length && sortedS.length){
       const greed = sortedG.shift()
       const size = sortedS.shift()

       if(greed <= size){
           happyChild++
       } else{
           sortedG.unshift(greed)
       }
   }

   return happyChild
};