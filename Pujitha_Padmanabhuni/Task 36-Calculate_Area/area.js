function calculateArea(width, height) {
    var calculateAreaFunction = width * height;
    return calculateAreaFunction;
}

function calculateAreaWithDefault(width = 1, height = 1) {
    return width * height;
}

calculateAreaArrow = (width, height) => {
    return width * height;
}
console.log(calculateArea(5, 10));
console.log(calculateAreaWithDefault() + " With default values");
console.log(calculateAreaWithDefault(5, 10) + " Without default values");
console.log(calculateAreaArrow(6, 20) + " arrow fun");