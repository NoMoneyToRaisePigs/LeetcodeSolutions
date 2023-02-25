/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let result = ''

   const findLongest = (str) => {
       let leftNum = 0
       let rightNum = 0
       let count = 0

       while(count < str.length){
           const letter = str[count]
           count = count + 1

           if(letter === '('){
               leftNum = leftNum + 1
           }
           else {
               rightNum = rightNum + 1
           }

           if(rightNum > leftNum ){
               break
           }

           if(leftNum === rightNum){
               result = leftNum + rightNum > result.length ? str.substr(0, count) : result
           } 
       }
   }

   for(let i = 0; i < s.length; i++){
       const cut = s.substr(i)
       if(result.length < cut.length){
           findLongest(cut)
       }
   }

   return result.length
};