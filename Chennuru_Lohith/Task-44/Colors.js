let colors=["red","green","blue"];
console.log(colors[0]);

colors[1]="yellow";
console.log(colors[1]);

colors[3]="newcolor";
console.log(colors[3]);


for(let i=0;i<4;i++){
    console.log(colors[i]);
}
i=0;
while(i<4){
    console.log(colors[i]);
    i++;
}


for(let i of colors){
    console.log(i);
}

console.log(typeof(colors));
console.log(colors.length);

colors.push("grey");
console.log(colors[4]);

colors.pop();
console.log(colors);

console.log(colors.indexOf("blue"));

colors.owner="Lohith";
console.log(colors);

for(let property in colors){
    console.log(property+":"+ colors[property]);
}