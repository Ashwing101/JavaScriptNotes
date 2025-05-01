function sayHello(){
    console.log('Hello World')
}

sayHello();


function add(num1, num2){
 console.log(num1+num2);   
}

add(25,44);

function sub(num1, num2){
    return num1-num2;

    console.log('After the return');
}

const res = sub(10, 6);
console.log(res, sub(8, 3));