
function areaOfRectangle(length,width){
    return 2*(length+width);
}
function areaOfCircle(radius){
    return (3.14*radius*radius);
}
function areaOfTriangle(base,height){
    return (0.5*base*height);
}

function calculatePaintingCost(dimension1,dimension2,calculateArea){
    area=calculateArea(dimension1,dimension2);
    const costPerUnit=2;
    totalCost=area*costPerUnit;
    return totalCost;
}

console.log(calculatePaintingCost(5,10,areaOfRectangle));
console.log(calculatePaintingCost(3,null,areaOfCircle));
console.log(calculatePaintingCost(6,8,areaOfTriangle));