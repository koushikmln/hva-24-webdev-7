function calculateArea(width,height){
    return width*height;
}
console.log(calculateArea(5,10));

function calculateAreaWithDefaults(width=1,height=1){
    return width*height;
}
console.log(calculateAreaWithDefaults());
console.log(calculateArea(5,10));

let calculateAreaFunction = function(width,height){
    return width*height;
}
console.log(calculateAreaFunction(5,10));

let calculateAreaArrow= (width,height) =>{
    return width*height;
}
console.log(calculateAreaArrow(5,10));

