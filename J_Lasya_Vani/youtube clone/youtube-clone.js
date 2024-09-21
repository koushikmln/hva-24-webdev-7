var menuicon=document.querySelector(".menuicon");
var menubar=document.querySelector(".menubar");
var container=document.querySelector(".container");
menuicon.onclick=function(){
    menubar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")

}