 function doubleNumber(num){
    return num*2;
 }

 function squareNumber(num){
    return num*num;
 }

 function incrementNumber(num){
    return num+1;
 }

 function performOperation(num,operation){
    return operation(num);
 }

 const res1=performOperation(5,doubleNumber);
 console.log(res1);

 const res2=performOperation(5,squareNumber);
 console.log(res2);

 const res3=performOperation(5,incrementNumber);
 console.log(res3);