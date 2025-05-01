function regUser(user = 'Bot'){
// if(!user){
//     user = 'Bot';
// }
    return user + ' is registered';

}

//Default value for these type of case console.log(regUser());
//function regUser(user = 'Bot'){}
console.log(regUser());
//Rest Params
function sum(...numbers){
    //return numbers;

    let total = 0;

    for(const num of numbers){
        total += num;
    }
    return total;
}

console.log(sum(1,2,3,4,5));

// Objects as params

function loginUser(user){
return `The user ${user.name} with the id of ${user.id} is logged in`;
}

// const user ={
//     name:'Ashwini',
//     id: 10
// }
//console.log(loginUser(user));
console.log(loginUser({
    name:'Ashwini',
    id: 10
}));


//Array as params
function randomNumber(...arr){ //...arr way of passing the value and forming an array
    const randomNum = Math.floor(Math.random() * arr.length);
     const answer = arr[randomNum];
     console.log(answer);
}

//const arr = [1,2,3,4,5,6,7];

randomNumber(1,2,3,4,5,6,7);
