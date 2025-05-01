//Valuue are stored in stack

const name = 'John';
const age = 30;

//Reference values are stored in Heap

const person = {
    name:'Brad',
    age: 29,
}

let newName = name;
newName = 'Rakesh'

console.log(name, newName);

let newPerson = person;

newPerson.name = 'Ashwini'

console.log(newPerson, person);