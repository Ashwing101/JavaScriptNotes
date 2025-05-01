
//Other ways to create object
//const todo = {}; 
 const todo = new Object();

todo.id =1;
todo.name = 'jacob';
todo.completed = true;
x =todo;

const person ={
    address:{
        cords:{
            lat: 42.989,
            lng: -46.943,
        },
    },

};

x = person.address.cords.lat;

const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};

const ob3 = {...obj1, ...obj2};
const obj4 = Object.assign({}, ob3);

const todos =[
    {id: 1, name:'Buy milk'},
    {id: 2, name:'Buy fruits'},
    {id: 3, name:'Buy cat'},
    {id: 4, name:'Buy dog'}
];


//x = obj4;

x = todos[1].name;
//To get object keys
x = Object.keys(todo);

//To get object value
x = Object.values(todo);

//To get object entries
x = Object.entries(todo);

//To get object hasOwn
x = Object.hasOwnProperty('name');





console.log(x);