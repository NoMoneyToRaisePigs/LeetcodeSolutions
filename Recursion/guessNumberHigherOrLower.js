// https://leetcode.com/problems/guess-number-higher-or-lower/description/

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */



var guess = function (num) { 
   if (num === 6) return 0
   
   return num > 6 ? -1 : 1
}

var guessNumber = function(end, start = 1) {
      let middle = Math.floor((end + start) / 2)

      let compare = guess(middle)
   
      if(compare === -1){
          return guessNumber(middle - 1, start)
      } else if (compare === 1) {
          return guessNumber(end, middle + 1)
      } else {
          return middle
      }
};