const firstName ='Ashwini';
const lastName = 'Gour';
const age = 29;

const person ={
    firstName,
    lastName,
    age,
};

// console.log(person);

//Disturcturing

const todo={
id:1,
title:'Take me out',
user:{
    name : 'Rav',
},

};

const {
    id : todoId, // This is called renaming
    title,
    user:{name} //This is called distructring
}= todo;

// console.log(todoId);


//distructring arrays
const number =[23,67,33,49, 52];

const[first, second, ...rest] = number;

console.log(first, second, rest);