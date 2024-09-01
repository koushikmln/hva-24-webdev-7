colors = ["red", "green", "blue"];
console.log(colors[0]);

colors[1] = 'yellow';
console.log(colors);

colors.push('white');
console.log(colors);

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

console.log("For of loop");
for (let x of colors) {
    console.log(x);
}

console.log(colors.length);
console.log(typeof(colors));

colors.push('Gray');
console.log(colors);
colors.pop();
console.log(colors);
console.log(colors.indexOf("red"));

colors.owner = "Pujitha";
console.log(colors);

for (i in colors) {
    console.log(i + " " + colors[i]);
}