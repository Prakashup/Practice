//write a javascript with takes a string and  occurance as parameter  
// and returns the count of each character in the string in decreasing order 

// Example usage:
// const inputString = "hello world";
// const occurrence = 3;
// const result = countCharacters(inputString, occurrence);
// console.log(result); // Output: [ [ 'l', 3 ], [ 'o', 2 ], [ 'h', 1 ] ]


function countCharacters(str, occurance){
   let characterCount = {};
   let occuranceIndex = occurance ? (occurance - 1): 0;

    for(character of str){
        characterCount[character] = (characterCount[character] || 0 ) + 1; 
    }

    // convert oblect to array and short it
     const sortByOccurance = Object.entries(characterCount).sort((a,b) => b[1] - a[1]);

     //return the result based upon occurance of character which is coming as param
    if((occurance > 0) && (occurance <= sortByOccurance.length)){
       return sortByOccurance[occuranceIndex];
    } else {
        return new Error("Occurance param must be a vaild number");
    }


}

const result = countCharacters("abbcccddddddfffffffff", 3);
console.log(result); // Output: [ [ 'l', 3 ], [ 'o', 2 ], [ 'h', 1 ] ]

