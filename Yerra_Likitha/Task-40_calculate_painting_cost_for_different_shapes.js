function areyOfrectangle(length,width){
    area=length*width;
    return area;
}
function areaOfCircle(radius){
    area=(22/7)*radius^2;
    return area;
}
function areaOfTriangle(base,height){
    area=0.5*base*height;
    return area;
}
function calculatePaintingCost(dimension1,dimension2,calculateArea){
    const area=calculateArea(dimension1,dimension2);
    const costPerUnit=2;
    const totelcost=area*costPerUnit;
    return totelcost;
}
calculatePaintingCost(5,10,areyOfrectangle);
console.log(area);
calculatePaintingCost(3,null,areaOfCircle);
console.log(area);
calculatePaintingCost(6,8,areaOfTriangle);
console.log(area);
