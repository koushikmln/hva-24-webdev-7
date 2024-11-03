var X = 1;

function removeLastListItem() {
    const parent = document.getElementById("list");
    var child = parent.lastElementChild;
    if (child) {
        parent.removeChild(child);
    }

}

function addListItem() {
    const li = document.createElement("li");
    const node = document.createTextNode("List Item " + X);
    X += 1;
    li.appendChild(node);

    const element = document.getElementById("list");
    element.appendChild(li);
}

var x = document.getElementById("addButton");
x.addEventListener("click", addListItem);

var y = document.getElementById("removeButton");
y.addEventListener("click", removeLastListItem);