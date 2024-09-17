function higherOrderFunction(num,callback){
    callback(num); 
}
function callbackFunction(number){
    console.log(number);
}
higherOrderFunction(5,callbackFunction);

higherOrderFunction(10,function(number){
    console.log(number);
});

higherOrderFunction(4,function(number){
    console.log(number*number);
})

function newHigherOrderFunction(num1,num2,callback){
    callback(num1,num2);
}
newHigherOrderFunction(3,7,function(num1,num2){
    console.log(num1+num2);
});