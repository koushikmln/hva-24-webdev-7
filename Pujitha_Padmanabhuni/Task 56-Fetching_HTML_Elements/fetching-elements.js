var a = document.getElementById("myDiv");
console.log(a.textContent);

const eles = document.getElementsByClassName("myClass");

for (let i = 0; i < eles.length; i++) {
    console.log(eles[i].textContent);
}

const eles2 = document.getElementsByTagName("p");
for (let i = 0; i < eles2.length; i++) {
    console.log(eles2[i].textContent);
}

const eles3 = document.querySelectorAll("span.highlight");
for (let i = 0; i < eles3.length; i++) {
    console.log(eles3[i].textContent);
}

console.log(document.querySelector("span.highlight").textContent);