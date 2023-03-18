/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
export default function spiralMatrix(matrix) {
   const width = matrix[0].length
   const height = matrix.length

   let result = []


   const spiral = (m, horizental, leftRight, upDown) => {
       if(m.length == 0){
           return
       }

       if(horizental){
           if(leftRight){
               result = [...result, ...m.shift()]
           } else {
               result = [...result, ...m.pop().reverse()]
           }
           leftRight = !leftRight
       } else{
           if(upDown){
               m.forEach(x => {
                   result.push(x.pop())
               })
           } else{
               const temp = []

               m.forEach(x => {
                   temp.push(x.shift())
               })

               result = [...result, ...temp.reverse()]
           }

           upDown = !upDown
       }

       spiral(m, !horizental, leftRight, upDown)
   }
   spiral(matrix, true, true, true)

   return result
};