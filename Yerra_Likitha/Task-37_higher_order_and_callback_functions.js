function higherOrderFunction(num,callback) {
    callback(num); 
}
function callbackFunction(number) {
    console.log(number);
}
higherOrderFunction(5,callbackFunction);
higherOrderFunction(10,function(number) {
    console.log(number);
})
higherOrderFunction(4,function(number){
    console.log(number)
})
function newHigherOrderFunction(num1,num2,callback) {
    callback(num1+num2);
}
newHigherOrderFunction(3,7,function(callback) {
    console.log(callback);
})