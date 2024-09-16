function forEachArray(array,callback){
    callback(array);
}
forEachArray(["apple","bat","cat"],(arr)=>{
    arr.forEach((val)=>{
        console.log(val.toUpperCase());
    });
});
function mapArray(array,callback){
    callback(array);
}
mapArray(["apple","bat","cat"],function(arr){
    let array=arr.map((val)=>{
        return val.toUpperCase();
    });
    console.log(array);
});
function filterArray(array,callback){
    callback(array);
}
filterArray([1,2,3,4,5],function(arr){
    let newa=arr.filter((val)=>{
        return val%2!==0;
    });
    console.log(newa);
});