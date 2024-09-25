let colors=["red", "green", "blue"];//giving array input

//console.log(colors[0]);//log of first element in array

colors.splice(1,1,"Yellow");//color change from red to yellow

//console.log(colors[1]);//log of second element in array to console

colors.push("White");//pushing new color into array

//console.log(colors[colors.length-1])//to print last element in array

/*//for loop
for(let i=0;i<colors.length;i++){
  console.log(colors[i]);
}

//while loop
let i=0
while(i<colors.length){
  console.log(colors[i]);
  i++;
}

//for....of loop
for(let color of colors){
    console.log(color);
}*/

//console.log(typeof colors);//typeof

console.log(colors.length);//length ofarray

console.log(colors.push("Gray"));//pushing array , it gives size of array as output
console.log(colors)

console.log(colors.pop());//poping the lasty element of array

console.log(colors.indexOf("blue"));//finding index of elements in array

colors.owner="Lokesh";//adding a prperty called owner to array

console.log(colors.owner);

console.log(colors)
