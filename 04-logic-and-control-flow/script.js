const age  = 17;

//if condition

// if(age > 18){
//     console.log('True')
// }else{
// console.log('False')
// }

//Ternary Operator

age >=18 ? console.log('Ture it is') : console.log('Fasle is is');

//Assigning a conditional value to a variable

const canVote = age >= 18 ? true : false;

console.log(canVote);


//Mutiple Statement

const auth = true;
// let redirect;
// if(auth){
//     alert('Welcome');
//     redirect = '/dashboard';
// }else{
//     alert('Not Welcome');
//     redirect = '/login';
// }

// console.log(redirect)

//.....Short code for above code

// const redirect = auth ? (alert('Welcome'), '/dashboard') : (alert('Not Welcome'), '/login');

// console.log(redirect);


//auth ? console.log('Welcome') : null;

auth && console.log('Welcome');
