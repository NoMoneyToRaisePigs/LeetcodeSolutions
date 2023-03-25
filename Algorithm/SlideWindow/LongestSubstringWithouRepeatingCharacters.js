/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   let left = 0
   let right = 0
   const map = {}
   let res = 0

   while(right < s.length && left <= right) {
       if(!map[s[right]]) {
           map[s[right]] = true
           right++
       } else {
          delete map[s[left]]
          left++
       }

       res = Math.max(res, Object.keys(map).length)
   }

   return res
};

// ---------------------------------------------------
var lengthOfLongestSubstring = function(s) {
   let start = 0;
   let result = 0;
   const lastSeen = {};
   for (let end = 0; end < s.length; end++) {
     const c = s.charAt(end);
     if (c in lastSeen) {
       start = Math.max(start, lastSeen[c] + 1);
     }
     lastSeen[c] = end;
     result = Math.max(result, end - start + 1);
   }
   return result;
 };