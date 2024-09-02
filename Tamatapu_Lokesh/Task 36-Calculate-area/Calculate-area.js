function calculateArea(width,height){
    return width*height;
}

const Area=calculateArea(5,10);

console.log(Area)

function calculateAreaWithDefaults(width=1,height=1){
    return 1
}

let without_para=calculateAreaWithDefaults();
console.log(without_para);

let with_para=calculateAreaWithDefaults(5,10);

const calculateAreaFunction = function(length, width) {
    return length * width;
};

let fun_exp = calculateAreaFunction(5,10);
console.log(fun_exp)

const calculateAreaArrow = (length, width) => {
    return length * width;
};



