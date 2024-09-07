function calculatearea(w,h)
{
    return w*h;
}
const ans=calculatearea(5,10)
console.log(ans);
function calculateareawithdefaults(w=1,b=1){
    return w*b
}
const ans1=calculateareawithdefaults()
console.log(ans1)
const ans2=calculateareawithdefaults(5,10)
console.log(ans2)
const calculateareafunction=function(w,h){
    return w*h;
}
const area= calculateareafunction(5,10)
console.log(area)
const calculateareaarrow=(w,h)=>w*h;
const areaa=calculateareaarrow(5,10);
console.log(areaa)