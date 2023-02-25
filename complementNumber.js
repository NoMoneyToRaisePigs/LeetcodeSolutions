/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
   const getBinary = (n) => {
       if(n == '0') return '0'

       let binary = ''

      let nNum = Number(n)

       while(nNum > 0) {
           binary = nNum % 2 + binary
           nNum = parseInt(nNum / 2)
       }

       return binary
   }

   const revert = (b) => {
       let reverted = []

       for(let i = 0; i < b.length; i++){
           reverted[i] = b[i] == '0' ? '1' : '0' 
       }

       return reverted.join('')
   }

   const getNum = (reverted) => {
      let actualRevered = String(Number(reverted))
      if (actualRevered == '0') return 0
      
       let result = 0

      for (let i = 0; i < actualRevered.length; i++){
          if(Number(actualRevered[i]))
            result += (2 ** (actualRevered.length - i - 1))
       }

       return result
   }

   const binary = getBinary(num)
   const reverted = revert(binary)
   const converted = getNum(reverted)

   return converted
};