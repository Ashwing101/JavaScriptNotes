// function add(a,b){
//     return a + b;
// }

// console.log(add(10, 60));


//Arrow function
const add = (a,b) =>{
    return a +b;
}

//Implicit Return
const sub = (a,b) => a - b;

//emit () when you have single param
const double = a => a * a;

//Returning an object
const createObj = () =>({
    name: 'Brad',
})

const number = [1,2,3,4,5,6];

number.forEach(function(n){
console.log(n);
});

// Arrow function in a callback
number.forEach((n)=>console.log(n));


console.log(createObj());
console.log(double(5))

console.log(add(878,43));
console.log(sub(555,78));
