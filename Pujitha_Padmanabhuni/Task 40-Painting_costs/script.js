function areaOfRectangle(l, b) {
    return l * b;
}

function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}

function areaOfTriangle(b, h) {
    return 0.5 * b * h;
}

function calculatePaintingCost(dim1, dim2, calculateArea) {
    area = calculateArea(dim1, dim2);
    const costPerUnit = 5;
    var totalcost = area * costPerUnit;
    return totalcost;
}
console.log(calculatePaintingCost(5, 10, areaOfRectangle));
console.log(calculatePaintingCost(5, null, areaOfCircle));
console.log(calculatePaintingCost(6, 8, areaOfTriangle));