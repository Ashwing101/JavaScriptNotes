console.log(addDollarDisgn(500));

// Function Declaration

function addDollarDisgn(value){
    return '$' + value;
}

console.log(addDollarDisgn(500));

//Function expression

const addPlusSign = function(value){
    return '+' +  value;
}
console.log(addPlusSign(200));

//hoisting : moving of function and the variable declaration to the
//top of the current scope before the code is run