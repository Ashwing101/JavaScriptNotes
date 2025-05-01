let x;
const person ={
    name:'Ashwini',
    age:'29',
    isAdmin:true,
    address:{
       street:'3402 Tulane Dr',
       city:'Hyattsville',
       state:'MD' 
    },
    hobbies :['Singing', 'Golf', 'Cricket']
};

x = person.name;
x1 = person.age;
x = person.address.state;;
x = person.address.city;
x = person.hobbies[0];

person.name= 'Avinash'
x = person.name;

//Remove prop from obj

delete person.age;
person.hasChildren = true;
person.greet = function(){
    console.log(`Hello, my name is ${this.name}`);
}
person.greet();

x = person;

console.log(x);