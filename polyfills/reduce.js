const arry =[1,2,3,4,5,6,7];
const emptyArry = [1, 2];

//const sum = emptyArry.reduce((a, b) => { return  a+b}, 0);

//console.log("reduce sum=>", sum);

//=====================================

Array.prototype.myReduce = function(callback, initialValue){
    let previousValue = initialValue || 0 ;

    for(let i=0; i < this.length; i++){
        previousValue = callback(previousValue, this[i], this);
    }
        return previousValue;
}

const mySum = emptyArry.myReduce((a, b) => {return a+b});

console.log("My reduce Sum=>", mySum);