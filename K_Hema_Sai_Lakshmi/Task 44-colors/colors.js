let colors =["red","green","blue"];
console.log(colors[0]);
colors[1]="yellow";
console.log(colors[1]);
colors.push("pink");
console.log(colors[colors.length-1]);
for(let i=0;i<colors.length;i++){
    console.log(colors[i]);
}
let i=0;
while (i<colors.length) {
    console.log(colors[i]);
    i++
}
for (let color of colors){
    console.log(color)
}
console.log(typeof colors);
console.log(colors.length);
colors.push("orange");
console.log(colors);
colors.pop();
console.log(colors);
let index=colors.indexOf("blue");
console.log(index);
colors.owner="sai lakshmi";
console.log(colors);
for(let property in colors){
    console.log(`${property}: ${colors[property]}`);
}





// no auto increment in for loop
// colors.lenght,colors.indexof,typeof colors,for in,for of,colors.owner