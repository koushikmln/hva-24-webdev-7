let numbers=[1,2,3,4,5];
numbers.forEach(function (eachnumber){
    console.log(eachnumber);
});

numbers.forEach(function(multiply){
    console.log(multiply*2)
})

squaredNumbers=numbers.map(function(numsquare){
    return numsquare*numsquare;
});
console.log(squaredNumbers);

squaredNumbers=numbers.map( (numsquare) => 
    {
    return numsquare*numsquare;
});
console.log(squaredNumbers);

//Filter

evenNumbers=numbers.filter(function(evennums){
    if (evennums%2==0){
        return(evennums);
    }
    
})
console.log(evenNumbers);

evenNumbers=numbers.filter((evennums)=>{
    if (evennums%2==0){
        return(evennums);
    }
    
})
console.log(evenNumbers);

