let person1 = {
    name: "prakash",
    age: 30
}

let person2 = {
    name: "Vikash",
    age: 25
}

const printName = function(city){
    return `My name is ${this.name} and age ${this.age} years lives in ${city}`;
}

//console.log(printName.call(person2, "Dhanbad"));

//==================== CALL polyfill================================

Function.prototype.myCall = function(obj = {}, ...args){
   if(typeof this !== "function") {
     throw new Error("ITS NOT CALLABLE");
   }
  
   obj.fn = this;
   return obj.fn(...args);
};

//==================== Apply polyfill================================
Function.prototype.myApply = function(obj = {}, ...args){
    if(typeof this !== "function") {
      throw new Error("ITS NOT CALLABLE");
    }
    if(!Array.isArray(...args)){
      throw new TypeError("Create list from Array list");
    }
   
    obj.fn = this;
    return obj.fn(...args);
 };

//console.log(printName.myApply(person1, ["Bengalore"]));

//==================== Bind polyfill================================
 
const printDetails =  printName.bind(person1);
 console.log(printDetails("Bengalore"));

 Function.prototype.mybind = function(obj= {}, ...args1){
     if (typeof this !== "function"){
        throw new TypeError("Not called on function");
     }
    obj.fn = this;
    return function(...args2){
      return obj.fn(...args1, ...args2);
    }
 }
 const printDetails1 =  printName.mybind(person2);
 console.log(printDetails1("Dhanbad"));