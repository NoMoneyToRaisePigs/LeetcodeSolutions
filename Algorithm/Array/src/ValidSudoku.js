//36 https://leetcode.com/problems/valid-sudoku/


/**
 * @param {character[][]} board
 * @return {boolean}
 */
export default function isValidSudoku(board) {

   const isDuplicate = (numStr, map) => {
       if(numStr === '.'){
           return false
       } else {
           if(map[numStr]){
               return true
           } else {
               return false
           }
       }
   }
   
       //check 3 * 3
      for (let i = 1; i < 9; i += 3){
         for (let j = 1; j < 9; j += 3) { 

            const SudokuMap = {}
   
            for(let row = i - 1; row < i - 1 + 3; row++){
                for(let column =  j - 1; column < j - 1 + 3; column++){
                    const numStr = board[row][column]
                  //  console.log(numStr)
                   
                    if(isDuplicate(numStr, SudokuMap)){
                        return false
                    } else {
                       if(numStr != '.')
                         SudokuMap[numStr] = true
                    }
                }
            }

         }
      }
   
       //check row
       for(let i = 0; i < board.length; i++){
           const map = {}
   
           for(let j = 0; j < board[i].length; j++){
               if(isDuplicate(board[i][j], map)){
                   return false
               } else {
                  if(board[i][j] != '.')
                     map[board[i][j]] = true
               }
           }
       }
   
       //check column
       for(let i = 0; i < board.length; i++){
           const map = {}
   
           for(let j = 0; j < board[i].length; j++){
   
               const numStr = board[j][i]
              
               if(isDuplicate(numStr, map)){
                   return false
               } else {
                  if(numStr != '.')
                     map[numStr] = true
               }
           }
       }
   
       return true
   };