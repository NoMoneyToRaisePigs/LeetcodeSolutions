/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiplyStrings = function (num1, num2) {
    if (num1 == '0' || num2 == '0') { 
        return '0'
    }

    const strSum = []
    
    const carry = (strProduct, index) => { 
        if (!strSum[index]) {
            strSum[index] = Number(strProduct)
        } else { 
            const afterAdd = Number(strSum[index]) + Number(strProduct)

            if (afterAdd > 9) {
                strSum[index] = Number(String(afterAdd)[1])
                carry(String(afterAdd)[0], index + 1)
            } else { 
                strSum[index] = afterAdd
            }
        }
    }

   for(let i =0; i < num1.length; i++){
       let outZeros = num1.length - 1 - i
       let outNum = Number(num1[i])

       for(let k = 0; k < num2.length; k ++){
           let innerZeros = num2.length - 1 - k
           let innerNum = Number(num2[k])

           let product = String(outNum * innerNum)
           let index = outZeros + innerZeros

           if (product.length == 1) {
            carry(product[0], index)
           } else { 
            carry(product[1], index)
            carry(product[0], index + 1)
           }    
       }
   }

   return strSum.reverse().join('')
};