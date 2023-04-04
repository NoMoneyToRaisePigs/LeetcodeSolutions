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


const longestNiceSubstring = (s) => {
   if (s.length < 2) return "";
   let arr = [...s];
   let set = new Set(arr);
   for (let i = 0; i < arr.length; i++) {
       const c = arr[i];
       if (set.has(c.toUpperCase()) && set.has(c.toLowerCase())) continue;
       const sub1 = longestNiceSubstring(s.substring(0, i));
       const sub2 = longestNiceSubstring(s.substring(i + 1));
       return sub1.length >= sub2.length ? sub1 : sub2;
   }
   return s; 
}