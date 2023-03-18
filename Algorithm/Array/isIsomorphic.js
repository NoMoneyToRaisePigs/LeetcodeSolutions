/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {

   const mapS = {}
   const mapT = {}
   var tempS = ''
   var tempT = ''


   for(let i = 0; i < s.length; i++){
       const letterS = s[i]
       const letterT = t[i]

       if(!mapS[letterS]){
         mapS[letterS] = letterT
      }
      
      if (!mapT[letterT]) { 
         mapT[letterT] = letterS
      }
      
      tempS += mapS[letterS]
      tempT += mapT[letterT]
   }

   return tempS === t && tempT === s
};