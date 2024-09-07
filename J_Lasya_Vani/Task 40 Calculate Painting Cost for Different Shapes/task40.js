function areaofrectangle(l,w){
    return l*w;
}
function areaofcircle(r){
    return 3.141*r*r;
}
function areaoftriangle(base,height){
    return 0.5*base*height;
}
function calculatepaintingcost(dimension1,dimension2,calculatearea){
    calculatearea(dimension1,dimension2)
    cost=2;
    return calculatearea(dimension1,dimension2)*cost;
}
console.log(calculatepaintingcost(5,10,areaofrectangle));
console.log(calculatepaintingcost(3,null,areaofcircle));
console.log(calculatepaintingcost(6,8,areaoftriangle));