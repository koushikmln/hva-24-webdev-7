function areaOfRectangle(l,b){
    return l*b;
}
function areaOfCircle(r){

    return  3.14*(r**2);
}
function areaOfTriangle(b,h){
    return 0.5*b*h;
}
function calculatePaintingCost(dimension1, dimension2,area){
    a = area(dimension1,dimension2);
    costper=2;
    total_cost=costper*a;
    return total_cost;
}
let cost = calculatePaintingCost(5,10,areaOfRectangle);
console.log(`Painting cost for rectangle: $${cost}`);
cost=cost = calculatePaintingCost(3, null, areaOfCircle);
console.log(`Painting cost for circle: $${cost}`);
cost = calculatePaintingCost(6, 8, areaOfTriangle);
console.log(`Painting cost for triangle: $${cost}`);
