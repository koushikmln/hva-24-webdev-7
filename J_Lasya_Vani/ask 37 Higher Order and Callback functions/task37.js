function higherorderfunction(num,callback){
    callback(num);
}
function callbackfun(numb)
{
    console.log(numb);
}
higherorderfunction(5,callbackfun)

higherorderfunction(10,function(numb)
{
    console.log(numb)
});


higherorderfunction(4,function(num){
    console.log(num*num)
});

function newhigherorderfunction(num1,num2,callback1){
    callback1(num1,num2)
}
function callback1(num1,num2)
{
    console.log(num1+num2);
}
newhigherorderfunction(3,7,callback1)