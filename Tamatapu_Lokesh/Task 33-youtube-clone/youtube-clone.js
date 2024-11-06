const menuIcon = document.getElementById('menu-icon');
const sideBar = document.getElementById('sidebar');
const container = document.getElementById('container');
const footer = document.getElementById('footer');



menuIcon.onclick = function(){
    sideBar.classList.toggle('small-sidebar');
    container.classList.toggle('large-container');
    footer.classList.toggle('hide-footer');
}

fetch('./data.json')
    .then(res => res.json())
    .then(
        data => {
            console.log(data);
        })


