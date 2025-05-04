const people =[{
    firstName:"Ashwini",
    lastName:'Gour',
    age:24,
    email:'a@gmail.com',
    phone:'909-409-3385 '
},
{
    firstName:"Raj",
    lastName:'ran',
    age:21,
    email:'g@gmail.com',
    phone:'909-409-3385 '
},
{
    firstName:"Rohan",
    lastName:'Joshep',
    age:22,
    email:'r@gmail.com',
    phone:'909-409-3385 '
},{
    firstName:"Sonali",
    lastName:'sharma',
    age:29,
    email:'s@gmail.com',
    phone:'909-409-3385 '
}]





const data  = people.filter((val) =>{
   return val.age<25;
}).map((val)=>{
    return{
            firstName : val.firstName,
            lastName: val.lastName,
            email: val.email,
}
})

// console.log("data 1 ", data);


const num = [2,-3,4,6,-2,-9];

const answer = num.
filter((val)=> val > 0).
reduce((acc, cur)=>{
return cur +=acc;  
},0);

console.log(answer);

const words = ['coder', 'programmer', 'developer'];

const cWords = words.map((word)=>{
   return word[0].toUpperCase() + word.slice(1, word.length);
})


console.log(cWords);