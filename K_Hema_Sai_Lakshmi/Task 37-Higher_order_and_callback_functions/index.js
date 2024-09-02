function callback(num){
    console.log(num);
}


function higherOrd(num,cb){
    cb(num);
}
higherOrd(6,callback);
s=function(num){
    console.log(num**2);
}

function higherOrder(num,s){
    s(num);
}

higherOrder(4,s)

function p(num1,num2){
      return num1+num2;
}
function newHigherOrderFunction(num1,num2,p){
     return p(num1,num2);
}

console.log(newHigherOrderFunction(3,7,p));