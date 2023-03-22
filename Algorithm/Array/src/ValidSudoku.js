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
       for(let i = 3; i < 9; i += 3){
           const SudokuMap = {}
   
           for(let row = 0; row < i; row++){
               for(let column = 0; column < i; column++){
                   const numStr = SudokuMap[board[row][column]]
   
                   if(isDuplicate(numStr, SudokuMap)){
                       return false
                   } else {
                       SudokuMap[numStr] = true
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
                   map[board[i][j]] = true
               }
           }
       }
   
       //check column
       for(let i = 0; i < board.length; i++){
           const map = {}
   
           for(let j = 0; j < board[i].length; j++){
   
               if(isDuplicate(board[j][i], map)){
                   return false
               } else {
                   map[board[j][i]] = true
               }
           }
       }
   
       return true
   };