squares = (item) => {
    console.log(item * item);
}
doubles = (item) => {
    return item * 2;
}
even = (item) => {
    return item % 2 == 0;
}

function forEachArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

function mapArray(arr, callback) {
    var a = [];
    for (let i = 0; i < arr.length; i++) {
        a.push(callback(arr[i]));
    }
    return a;
}

function filterArray(arr, callback) {
    var a = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            a.push(arr[i]);
        }
    }
    return a;

}
var arr = [1, 2, 3, 4, 5];
forEachArray(arr, squares);

var newarr = mapArray(arr, doubles);
console.log(newarr);

var newarr2 = filterArray(arr, even);
console.log(newarr2);