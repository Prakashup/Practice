const arry = [1,2,3,4,5,6,7,8,9,10];
const outputArry = [2,4,6,8];


const filterArray = arry.filter(item => item%2 == 0);

//console.log("filter method", filterArray);


Array.prototype.myFilter = function(callback){
   let newArray = [];
   for(let i=0; i < this.length; i++){
      if(callback(this[i], i)) {
        newArray.push(this[i]);
      }
   }

   return newArray;

}

const myFilterArray = arry.myFilter(item => item%2 == 0);
console.log(" myfilter method", myFilterArray);

