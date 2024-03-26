//write a function to reverse the string 

// function reverseString(str){
//     let revStr = "";
//    for(let i = str.length - 1; i >=0; i--){
//      revStr += str[i];
//    }
//    return revStr;
// }

// function reverseString(str){
  
//    return [...str].reverse().join('');
// }

// console.log(reverseString("Hello maam kaha ho"));


////////////////////////////////////////////////////////////
// Find the longest word in the sentense
// Example: I am an Indian;   output : Indian

// function longetsWord(sentence) {
//     let longestWord = "";
//     let sentenceArray = sentence.split(" ");
//     console.log(sentenceArray);
    
//     for(let word of sentenceArray) {
 
//        if(longestWord.length < word.length){
//             longestWord = word;
//        }
//     }

//     return longestWord;
// }

// let sentence = "I am an Indian";
// console.log(longetsWord(sentence));


/////////////////////////////////////////////////////////////////////////////
// Write a functio to remove dublicate items from an array
// Example  [1,2,3,4,4,4,5,6,7,8,8,8,]    output [1,2,3,4,5,6,7,8]

// function removeDuplicate(arr){

//     let uniqueArry = [];

//     for(let i=0 ; i < arr.length; i++){
//        if(uniqueArry.indexOf(arr[i]) === -1){
//         uniqueArry.push(arr[i]);
//        }
//     }
//     return uniqueArry;
// }

// let arr = [1,2,3,4,4,4,5,6,7,8,8,8,];
// console.log(removeDuplicate(arr));

//////////////////////////////////////////////////////////
// write a function to counts numbers of Vowels in string

// function countVowel(str){
//     let vowels = ["a","e","i","o","u"];
//     let count = 0;
//     for(let char of str) {

//         console.log(char);
//         if(vowels.includes(char)){
//              count++
//         }
//     }
//     return count;
// }
// let string1 = "My name is India";
// console.log( countVowel(string1));



/////////////////////////
// Find the largest number in the array Example [1,2,3,4,5,6,7,8,9]  output =9;

function findLargest(arr){

    let largest = arr[0];

    for(let i=1; i < arr.length; i++){

        if(largest < arr[i] ){
            largest = arr[i];
        }
    }
    return largest;
}

var largeArr = [100, 12,27, 39, 40, 61, 8];

console.log(findLargest(largeArr));

