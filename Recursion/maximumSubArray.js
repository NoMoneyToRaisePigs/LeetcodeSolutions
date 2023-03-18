
const maxSubArray = (nums) => {
   if(nums.length == 0) return 0;
   let result = Number.MIN_SAFE_INTEGER;
   let sum = 0;
   for(let i = 0; i < nums.length; i++) {
       sum += nums[i];
       result = Math.max(sum, result);
       sum = sum < 0 ? 0 : sum;
   }
   return result;
};


const maximumSubArray = (arr) => { 
   let max = 0
   let sum = 0
   let subSolutions = {
      '-1': 0,
   }

   for (let i = 0; i < arr.length; i++) { 
      sum += arr[i]
      let current = Math.max(max, arr[i])
      subSolutions[i] = sum
         
      if (subSolutions[i] > max) {
         max = subSolutions[i]
      } 
   }

   return max
}

