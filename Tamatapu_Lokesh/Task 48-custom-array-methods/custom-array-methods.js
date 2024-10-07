//forEachArray Function
function forEachArray(arr,callback){
  for(let i=0;i<arr.length;i++){
    callback(arr[i]);
  }
}

// mapArray Function
function mapArray(arr,callback){
let temp=[];
for(let i=0;i<arr.length;i++){
    temp.push(callback(arr[i]));
  }
  return temp;
}

//filterArray Function
function filterArray(arr,callback){
let temp=[];
for(let i=0;i<arr.length;i++){
  if(callback(arr[i])){
    temp.push(arr[i]);
  }
}
return temp;
}