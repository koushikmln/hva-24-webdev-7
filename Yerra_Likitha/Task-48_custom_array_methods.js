function forEachArray(array,callback){
    for(let i=0; i<array.length; i++){
        callback(array[i],i,array);
    }
}
function mapArray(array,callback){
    const result=[];
    for(let i=0;i<array.length;i++){
        result.push(callback(array[i],i,array))
    }
    return result;
}
function filterArray(array,callback){
    const result=[];
    for(let i=0; i< array.length; i++){
        if(callback(array[i],i,array)){
            result.push(array[i])
        }
    }
    return result;
}
const array=[1,2,3,4,5];
forEachArray(array, (num) =>console.log(num*2));
const doubled=mapArray(array,function(num){
    return num*2;
});
console.log(doubled);
const evenNumbers=filterArray(array,function(num){
    return num%2==0
});
console.log(evenNumbers);

