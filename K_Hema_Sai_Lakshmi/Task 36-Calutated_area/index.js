function calculateArea(w,h){
    return w*h;
}
console.log(calculateArea(5,10))
function calculateAreaWithDefaults(w=1,h=1){
    return w*h;
}
console.log(calculateAreaWithDefaults());
console.log(calculateAreaWithDefaults(5,10));
let calculateAreaFunction = function calculateArea(w,h) {
    return w*h;
}
console.log(calculateAreaFunction(5,10));
calculateAreaArrow=(w,h) =>{
    return w*h;
}
console.log(calculateAreaArrow(5,10));