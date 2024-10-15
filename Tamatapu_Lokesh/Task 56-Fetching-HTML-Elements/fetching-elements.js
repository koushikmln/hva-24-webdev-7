const mydiv=document.getElementById('myDiv');
console.log(mydiv.textContent);

const myclass = document.getElementsByClassName('myClass');
Array.from(myclass).forEach(element => console.log(element.textContent));


const mypara=document.getElementsByTagName('p');
console.log(mypara.textContent);

const myspan = document.querySelectorAll('.highlight');
myspan.forEach(span => {
    console.log(span.textContent);
});

const myspa=document.querySelector('.highlight');
console.log(myspa.textContent);