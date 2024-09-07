function doublenumber(num){
    return 2*num;
}
function sqnum(num){
    return num*num;
}
function incrnum(num){
    return num+1;
}
function performoperation(num,operation){
    return operation(num);
}
console.log(performoperation(5,doublenumber));
console.log(performoperation(5,sqnum));
console.log(performoperation(5,incrnum));
