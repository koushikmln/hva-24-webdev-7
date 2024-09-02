var colors=["red","green","blue"];
console.log(colors[0]);
colors[1]="yellow";
console.log(colors[1]);
colors.push("black");
console.log(colors[3]);
n=colors.length-1
for(i=0; i<n; i++){
    console.log(colors[i]);
}
let a=0;
while (a<=n) {
    console.log(colors[a]);
    a++
}

for (let x of colors) {
    console.log(x);
}
console.log(typeof(colors));
console.log(colors.length);
colors.push("gray");
console.log(colors);
colors.pop(colors.length);
console.log(colors);
console.log(colors.indexOf("blue"));
colors.owner="likhita";
console.log(colors);
for (let y in colors){
    if (y.hasOwnProperty){
    console.log(y+':'+colors[y]);
}
}