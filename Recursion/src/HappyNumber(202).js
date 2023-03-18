// https://leetcode.com/problems/happy-number/

/**
 * @param {number} n
 * @return {boolean}
 */
export default function isHappy (n, looped = {}) {
    if (n === 1) {
        return true
    } 
    
    if (looped[n]) { 
        return false
    }

    let sum = 0
    let org = n

   while(n >= 1) {
       const digit = n % 10
       sum += Math.pow(digit, 2)

       n = parseInt(n / 10)
    }
    
    looped[org] = sum

   return isHappy(sum, looped)
};


function isHappyOtherSol(n) {
    let slow = fast = n;
    while (true) {
      slow = sq(slow);
      fast = sq(sq(fast));
      if (slow === fast) break;
    }
    
    return slow === 1;
  }
  
  function sq(num) {
    let sum = 0;
    while (num > 0) {
      let d = num % 10;
      sum += d * d;
      num = Math.floor(num/10);
    }
    return sum;
  }