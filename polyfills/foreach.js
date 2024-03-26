const players = ["Dhoni", "Rohit", "Virat","Surya"];
players.forEach(item=> console.log(item));

//================Custom Implentation ====================

Array.prototype.customforEach = function(callback){
   
    for(let i=0; i < this.length; i++){
         callback(this[i],i, this);
    }
}

players.customforEach((item)=>{
    console.log("IPL players => ",item);
  });


  //================Advance Custom Implentation ====================

Array.prototype.advcustomforEach = function(callback, thisContext){
   
    if(typeof callback !== 'function'){
        throw new Error("Callback is not a function");
    }

    for(let i=0; i < this.length; i++){
         callback.call(thisContext, this[i], i, this);
    }
}

players.advcustomforEach(item => console.log("IPL 2024 =>", item));