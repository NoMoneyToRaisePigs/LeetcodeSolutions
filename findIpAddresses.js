/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(input) {
   const result = []

   if(input.length < 4) {
       return []
   }

   const isValid = (section) => {
      const leadingZero = section.length > 1 && section.startsWith('0')

       return section && 
           !leadingZero &&
           Number(section) >=0 &&
           Number(section) <= 255
   }

   const tb = (str, combo = []) => {
       if(combo.length == 4) {
           if(!str){
               result.push(combo)
           } else {
               return 
           }
       }

       for(let i =0; i < str.length; i++){
           const section = str.substr(0, i + 1)

           if(isValid(section)){
               tb(str.substr(i + 1), combo.concat([section]))
           } else {
               continue
           }
       }
   }

   tb(input)

   return result.map(x => x.join('.'))
};