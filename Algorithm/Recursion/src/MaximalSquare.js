// https://leetcode.com/problems/maximal-square/description/


/**
 * @param {character[][]} matrix
 * @return {number}
 */
export default function maximalSquare(matrix) {
   let res = 0    


   const isSquareRightBottom = (startingRow, startingColumn, side) => {
       if(!matrix[startingRow] || !matrix[startingRow][startingColumn] || matrix[startingRow][startingColumn] == '0') return side

       for(let i = 0; i <= side; i++) {
           const row = Number(startingRow) + i

           for(let j = 0; j <= side; j++){
               const column = Number(startingColumn) + j

               if(!matrix[row] || !matrix[row][column] || matrix[row][column] == '0'){
                   return side
               }
           }
       }

       return isSquareRightBottom(startingRow, startingColumn, side + 1)
   }


   for(let i = 0; i < matrix.length; i++){
      for (let j = 0; j < matrix[0].length; j++){
            const num =  matrix[i][j]

           if(num == '1'){
               const side = isSquareRightBottom(i , j, 1)

               res = Math.max(side, res)
           }
       }
   }


   return Math.pow(res, 2)
};