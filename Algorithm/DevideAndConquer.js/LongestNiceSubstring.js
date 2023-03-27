/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
   const isNice = (str) => {
       const map1 = {}
       const map2 = {}

       for(let i = 0; i < str.length; i++){
           const letter = str[i]

           if(letter.match(/^[a-z]+$/)){
               map1[letter] = 1
           } else {    
               map2[letter] = 1
           }
       }

       const keys1 = Object.keys(map1)
       const keys2 = Object.keys(map2)

       if(keys1.length !== keys2.length) return false

      for (let i = 0; i < keys1.length; i++){
          const key = keys1[i]
           if(!map2[key.toUpperCase()]) return false
       }

       return true
   }

   const allNice = {}

   for(let i = 0; i < s.length; i++) {
       for(let j = i + 1; j <= s.length; j++){
          const subStr = s.slice(i, j)
          
          console.log(subStr)

           if(isNice(subStr)){
               allNice[subStr.length] = allNice[subStr.length] || []
               allNice[subStr.length].push(subStr)
           }
       }
   }

   if(Object.keys(allNice).length === 0) return ""

   const max = Math.max(...Object.keys(allNice).map(x => Number(x)))

   return allNice[max][0]
};