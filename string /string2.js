// function to check prime number : any number which divides with 1 and itself is a prime number ex, 3,5,7,11

// function isPrime(num){

//     for(let i =2; i <= num/2; i++){
//         if(num % 2 === 0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(6));


///////////////////////////////////////////////////////
// function to find factorial example  1*2*3*4*5 = 120

function factorial(num){

    if(num === 0){
        return 1;
    }

    let factorial = 1;
    for(let i = 1; i <= num; i++){
        factorial *= i;
    }
    return factorial;
}

console.log(factorial(3));