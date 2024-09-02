function forEachArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

// Now you can call the function
let fruits = ["apple", "banana", "cherry", "date"];
forEachArray(fruits, function(fruit, index) {
    console.log(index + ": " + fruit);
});
let array = [1, 2, 3, 4, 5];
let resullt=[]
function mapArray(array,callback){
    
    for(let i=0;i<array.length;i++){
        callback(array[i])
    }
    return resullt;
}

let squarenum = mapArray(array,function(item){
     resullt.push(item*item);
});
console.log(squarenum);
result1=[]
 function filterarray(array,callback){
    for(i=0;i<array.length;i++){
        if(callback(array[i])){
            result1.push(array[i])

        }
    }
    return result1
}
let even_num = filterarray(array,function(item){
    
    return item%2==0;
})
console.log(even_num);