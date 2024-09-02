function areaOfRectangle(length,width){
    return length*width;
}
function areaOfCircle(radius){
    return 3.14*radius*radius;
}
function areaOfTriangle(base,height){
    return 0.5*base*height;
}
function calculatePaintingCost(dim1,dim2,calculateArea){
    let res=calculateArea(dim1,dim2);
    const cost=2;
    return res*cost;
}
console.log(calculatePaintingCost(5,10,areaOfRectangle));
console.log(calculatePaintingCost(3,null,areaOfCircle));
console.log(calculatePaintingCost(6,8,areaOfTriangle));