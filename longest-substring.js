// find longest unique sub string in the given string
//Example 
//       "abcdabcbb"  - longest unique string is "abc" with length 3 

function longestUniqueString(s){
    
    let start = 0;
    let end  = 0;
    let maxLenght = 0;

    let uniqueStringSet = new Set();

    while(end < s.length){

       if(!uniqueStringSet.has(s[end])){
         uniqueStringSet.add(s[end]);
         end++;
         maxLenght = Math.max(maxLenght,uniqueStringSet.size);
       }else {
         uniqueStringSet.delete(s[start]);
         start++
       }
     
    }
    console.log("start",start, "end", end);
   return maxLenght;
}

const res = longestUniqueString("pwwkedw");
console.log(res);


// function twoSum(nums, target) {
//     // Create a map to store the indices of elements
//     const indices = new Map();
    
//     // Iterate through the array
//     for (let i = 0; i < nums.length; i++) {
//         // Calculate the complement needed to reach the target
//         const complement = target - nums[i];
//         console.log(complement, i);
//         console.log("indices=> ",indices.get(-2));
        
//         // Check if the complement exists in the map
//         if (indices.has(complement)) {
//             // Return the indices of the current element and its complement
//             return [indices.get(complement), i];
//         }
        
//         // If the complement doesn't exist, store the index of the current element
//         indices.set(nums[i], i);
//     }
    
//     // If no solution is found, return an empty array
//     return [];
// }

// // Example usage:
// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target));