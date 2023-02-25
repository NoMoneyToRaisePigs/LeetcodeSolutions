function longestPalindrome(s) { 
   var max = 0
   var result = ''

   const isPalindrome = (str) => { 
      for (let i = 0; i < str.length; i++) { 
         if (str[i] !== str[str.length - i - 1]) { 
            return false
         }
      }

      return true
   }

   const recursion = (str) => { 
      for (let i = 0; i < str.length; i++) { 
         const sub = str.substring(0, i + 1)
         if (isPalindrome(sub)) { 
            if (sub.length > max) { 
               max = sub.length
               result = sub
            }
         }
      }
   }

   for (let i = 0; i < s.length; i++) { 
      recursion(s.substr(i))
   }

   return result
}


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindromeMyOldSolution = function(s) {
   if(!s.length || s.length == 1) return s;
  
  let max = 0;
  let longestSub = '';

  for (let i = 0; i < s.length; i++) { 
     let center = s[i];
     let expand = 1;

     while (i - expand >= 0 || i + expand <= s.length - 1) { 
        if (s[i - expand] == s[i + expand]) {
           center = s[i - expand] + center + s[i + expand];
           expand++;
        }
        else if (s[i - expand] == center || s[i + expand] == center){ 
           center = center + center;
           break;
        }
        else { 
           break;
        }
     }

     if (center.length > max) { 
        max = center.length;
        longestSub = center;
     }
  }

  return longestSub;
};