var colors=['red','green','blue']
console.log(colors[0])
colors[1]='yellow'
console.log(colors[1])
colors.push('pink')
console.log(colors[colors.length - 1])
for(let i=0;i<colors.length;i++)
{
    console.log(colors[i]);
}
let i=0
while (i<colors.length){
    console.log(colors[i])
    i++;
}
for (const i of colors){
    console.log(i);
}
const x=typeof colors;
console.log(x);
console.log(colors.length);
colors.push('grey');
console.log(colors);
colors.pop();
console.log(colors);
console.log(colors.indexOf("pink"));
colors.owner="lasya";
console.log(colors)
for (const j in colors){
    console.log(j);
}
