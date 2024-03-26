
//Anagram is the word which has same characters 
//example bear/bare

function isAnagram(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

//console.log(isAnagram("bear", "bare"));


//////////////////////////////////////////////

// Find Missing Number:
// Question: Write a function to find the missing number in an array of consecutive numbers.
// Example: [1,2,3,4,6,7,8,9,10]  output 5;

let arr = [2,3,4,5,6,7,8,9,10,12];

// function getMissingNumber(arr){

//     const n = arr.length + 1;

//     const expectedSum = (n * (n +1) / 2);
//     const actualSum = arr.reduce((sum, num) => sum + num, 0 );

//     console.log(actualSum, expectedSum);

//     return expectedSum - actualSum;

// }

//console.log(getMissingNumber(arr));


function findAnyMissingNumber(arr){
    const missingNumber = [];
    let minNumber = Math.min(...arr);
    let maxNumber = Math.max(...arr);
    console.log(minNumber, maxNumber);

    for(let i = minNumber + 1; i < maxNumber; i++ ){
        if(arr.indexOf(i) === -1){
            missingNumber.push(i);
        }
    }
    return missingNumber;
}

let arr5 = [2,3,4,5,6,12];
console.log(findAnyMissingNumber(arr5));

/////////////////////////////////////////////////

//Merge Sorted Arrays:
//Question: Write a function to merge two sorted arrays into one sorted array.
// Example : ["a","b","d","f"]  ["a", "e","d", "h"]  Output = 

const arr1 = ["a","bb","c","d"];
const arr2 =  ["a", "c","d", "f"];

function mergerSortedArray(arr1, arr2){
    const mergeArray =  [...arr1, ...arr2];
    const sortArray = mergeArray.sort((a, b) => a - b);
      console.log(mergeArray);

    return [...arr1, ...arr2].sort();
}

//console.log(mergerSortedArray(arr1, arr2));

///////////////////////////////////////
//Rotate Array:
//Question: Write a function to rotate an array to the right by k steps.

function rotateArray(arr, k) {
    k = k % arr.length;
    console.log(k);
    console.log(arr.slice(-k));
    console.log(arr.slice(0, -k));
    const rotated = arr.slice(-k).concat(arr.slice(0, -k));
    return rotated;
}

let rotatearry = [1,2,3,4,5,6,7,8,9,10];

//console.log(rotateArray(rotatearry, 4));


//Remove Duplicates from an Array:
//Question: Write a function that removes duplicates from an array.
//Solution:

function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}

//console.log(removeDuplicates([1,2,3,3,4,4,4,]));



////////////////////////////////////////////
//Find the Longest Word:
//Question: Write a function that takes a string as an argument and returns the longest word in the string.