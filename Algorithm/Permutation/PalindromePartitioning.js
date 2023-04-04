/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {

   const isPalindrome = (str) => {
       for(let i = 0; i < str.length; i++) {
           if(str[i] !== str[str.length - i - 1]){
               return false
           }
       }
 
       return true
   }
 
   const result = []
 
   const findPartition = (str, combo = []) => {
         if(!str) {
             if(combo.join('') === s) {
                 result.push(combo)
             }
         }
 
         for(let i = 0; i < str.length; i++) {
             const sliced = str.slice(0, i + 1)
 
             if(isPalindrome(sliced)) {
                 findPartition(str.slice(i + 1), [...combo, sliced])
             }
         }
     }
 
     findPartition(s)
 
     return result
 };