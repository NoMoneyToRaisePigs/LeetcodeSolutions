/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
   let map = {}
   let index = 0
   let result = []

   for(let i = 0; i < strs.length; i++){
       let word = strs[i]
       let xxx = 1
       let notAddedYet = true

       for(let j = 0; j < word.length; j++){
           let letter = word[j]

           if(!map[letter]){
               if(notAddedYet){
                  index++
                  notAddedYet = false
               }
               map[letter] = index
           } 
          
          xxx = Math.max(xxx, map[letter])
       }

      

      if (word == "") {
         result[0] = result[0] ? result[0] : []
         result[0].push("")
      }
      else { 
         result[xxx] = result[xxx] ? result[xxx] : []
         result[xxx].push(word)
      }

   }

   return result.filter(x => x != undefined)
};


var groupAnagramsV2 = function (strs) {
   let result = []
   let map = {}

   for (let i = 0; i < strs.length; i++) { 
      let word = strs[i]

      if (!map[word]) { 
         const permutes = getStringPermutationV2(word)

         if (permutes == '') {
            map[''] = i + 1
         } else { 
            for (let j = 0; j < permutes.length; j++) { 
               map[permutes[j]] = i + 1
            }
         }
      }

      result[map[word]] = result[map[word]] ? result[map[word]] : []
      result[map[word]].push(word)
   }

   return result.filter(x => x != undefined)
};