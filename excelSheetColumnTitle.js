/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
   let map = {
      1: 'A',
      2: 'B',
      3: 'C',
      4: 'D',
      5: 'E',
      6: 'F',
      7: 'G',
      8: 'H',
      9: 'I',
      10: 'J',
      11: 'K',
      12: 'L',
      13: 'M',
      14: 'N',
      15: 'O',
      16: 'P',
      17: 'Q',
      18: 'R',
      19: 'S',
      20: 'T',
      21: 'U',
      22: 'V',
      23: 'W',
      24: 'X',
      25: 'Y',
      26: 'Z',
   }


   const resultArr = []
   let globalIndex = 0

   const carry = (index) => {
      if (resultArr[index] == 26) {
         resultArr[index] = 1
         carry(index + 1)
      } else { 
         resultArr[index] = resultArr[index] ? resultArr[index] + 1 : 1
      }
   }


   while(columnNumber - 1 >= 0) {
       columnNumber = columnNumber - 1
       carry(globalIndex)
   }

   return resultArr.reverse().map(x => map[x]).join('')
};

var convertToExcelTitle = (columnNumber) => { 
   let title = ''
   let map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

   if (columnNumber == 0) { 
      return ''
   }

   while (columnNumber > 0) { 
      title += map[columnNumber % 26 - 1]
      columnNumber = Math.floor(columnNumber / 26)
   }

   return title.split('').reverse().join('')
}

var convertToHex = (number) => { 
   let hex = ''

   let map = '0123456789ABCDEF'


   if(number == 0) return  map[0]


   while (number > 0) { 
      hex += map[number % 16]
      number = Math.floor(number / 16)
   }

   return hex.split('').reverse().join('')
}