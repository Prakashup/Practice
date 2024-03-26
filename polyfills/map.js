const arrayInput = [{"a":10, "b":20}, {"c":30,"d": 50 }];
const arrayOutput= [{"a":12, "b":22}, {"c":32,"d": 52 }];


const finalOutput = arrayInput.map( obj => {
    for(key in obj){
        obj[key] = obj[key] + 2;
    }
    return obj;
})
console.log("finalOutput");
console.log(finalOutput);


// Mymap

Array.prototype.myMap = function(cb){
  let newArray = [];
  for(let i=0; i < this.length; i++ ){
    newArray.push(cb(this[i]));
  }
  return newArray;
}


const finalOutput2 = arrayInput.myMap( obj => {
    for(ele in obj){
        obj[ele] = obj[ele] + 2;
    }
    console.log('-------',obj);
    return obj;
})
console.log("finalOutput2");
console.log(finalOutput2[1]);