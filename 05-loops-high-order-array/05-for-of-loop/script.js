const items =['books', 'pens', 'tables', 'pencil'];


// for(let i =0; i< items.length; i++){
//     console.log(items[i]);
// }

// for(const item of items){
//     console.log(item);
// }

const users = [{
    name: 'Ashwini'},
    {name: 'Avinash'},
    {name:'Rahul'},
    {name:'Anurag'

}];

for(const user of users){
    console.log(user);
}

//Loop through strings

const str = 'hello world';

for(const letter of str){
    console.log(letter);
}

//Loop over maps

const map = new Map();

map.set('name', 'Ashwini');
map.set('sex', 'Male');

for(const [key, value] of map){
    console.log(key, value);
}


