const email = 'test@test.com';

if(email){
    console.log('You passed');
}

console.log(Boolean(email));

//Things which give false;

// false
// 0
// NaN
// undefined
// null
// "" or ''(Empty String)


// Truthy and falsy caveats

const children = 0;
if(children != undefined){
    console.log(`You have ${children} children`);
}else{
    console.log('Please enter number of children');
}

//Checking for empty array
const post = ['post one'];

if(post.length > 0){
console.log('List of Post');
}else{
    console.log('No post to list');
}

//Checking for mepty object

const user= {};

if(user);

//Losse equality (==)
console.log(false == 0);
console.log('' == 0);
console.log(null === undefined); // Also do do the type check

