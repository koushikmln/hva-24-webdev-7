function doubleNumber(num){
    return num*2;
}
function sqaureNumber(num){
    return num*num;
}
function incrementNumber(num){
    return ++num;
}
function performOperation(num,function1){
    let res=function1(num);
    return res;
}
console.log(performOperation(5,doubleNumber));
console.log(performOperation(5,sqaureNumber));
console.log(performOperation(5,incrementNumber));