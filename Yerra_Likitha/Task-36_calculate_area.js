function calculateArea(width,height) {
    var area=width*height;
    return area;
}
console.log(calculateArea(5,10));

function calculateAreaWithDefaults(width=1,height=1){
    return width*height;
}
console.log(calculateAreaWithDefaults());
console.log(calculateAreaWithDefaults(5,10));

const calculateAreaFunction =function(width,height){
    return width*height;
}
console.log(calculateAreaFunction(5,10));

const calculateAreaArrow= (width,height) => width*height;
console.log(calculateAreaArrow(5,10))

