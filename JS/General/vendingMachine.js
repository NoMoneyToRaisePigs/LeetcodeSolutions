// console.log('binance interview')



/**
 * TASK
 *
 * Your task is to create a function that simulates a vending machine.
 *
 * Given an amount of 'money' and a 'productNumber', the vending machine
 * should output the correct product name and give back the correct
 * amount of change.
 *
 * The coins used for the change are the following:
 *  [500, 200, 100, 50, 20, 10, 5 ,1]
 * - You can assume that machine have unlimited amount of coins
 *
 * The return value is an object with 2 properties:
 *  product: the product name that the user selected.
 *  change: an array of coins (can be empty, must be sorted in descending order).
 *
 * NOTES
 *  If productNumber is invalid (out of range)
 *      you should return the string: "Enter a valid product number".
 *  If money is not enough to buy a certain product you should
 *      return the string: "Not enough money for this product".
 *  If there's no change, return an empty array as the change.
 */

// Products available
const products = [
   { number: 1, price: 100, name: "Orange juice" },
   { number: 2, price: 200, name: "Soda" },
   { number: 3, price: 150, name: "Chocolate snack" },
   { number: 4, price: 250, name: "Cookies" },
   { number: 5, price: 180, name: "Gummy bears" },
   { number: 6, price: 120, name: "Crackers" },
   { number: 7, price: 220, name: "Potato chips" },
   { number: 8, price: 80, name: "Small snack" }
 ];
 
 const coins = [500, 200, 100, 50, 20, 10, 5, 1];
 
 const ERROR_MSG_INVALID_PRODUCT = "Enter a valid product number"
 const ERROR_MSG_NOT_ENGOUGH_MONEY = "Not enough money for this product"
 const productMap = products.reduce((acc, cur) => {
   return {...acc, [cur.number]:cur}
 }, {})

 const vendingMachine = (cash, productNumber) => {
   // todo
 
    //hashMap
   if(!productMap[productNumber]) {
     return ERROR_MSG_INVALID_PRODUCT
   }
 
   if(cash < productMap[productNumber].price){
     return ERROR_MSG_NOT_ENGOUGH_MONEY
   }
 
   const getChange = (delta, changeResult = []) => {
     if(delta === 0) {
       return changeResult
     }
 
     for(let i = 0; i < coins.length; i++){
       const coinVal = coins[i]
 
       if(delta >= coinVal){
         changeResult.push(coinVal)
         return getChange(delta - coinVal, changeResult)
       }
     }
   }

    //while loop is good enough
 
   return {
       product: productNumber,
       change: getChange(cash - productMap[productNumber].price)
   }
 };
 
 
 
 
 
//  console.log(vendingMachine(500, 0)); // ➞ "Enter a valid product number"
//  console.log(vendingMachine(90, 1)); // ➞ "Not enough money for this product"
 console.log(vendingMachine(370, 5)); // ➞ { product: "Gummy bears", change: [ 100, 50, 20, 20 ] }
 console.log(vendingMachine(200, 6)); // ➞ { product: "Crackers", change: [ 50, 20, 10 ] }
 console.log(vendingMachine(80, 8)); // ➞ { product: "Small snack", change: [] }



// 370 - 180 = 190

// 100 50 20 20 
 