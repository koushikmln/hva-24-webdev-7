function higherOrderFunction(num,callback){
    callback(num);
}
function callbackFunction(number){
    console.log(number);
}
higherOrderFunction(10,function(num){
    console.log(num);
});
higherOrderFunction(10,function(num){
    console.log(num*num);
});
function newHigherOrderFunction(num1,num2,callback){
    callback(num1,num2);
}
newHigherOrderFunction(3,7,function(num1,num2){
    console.log(num1+num2);
});
