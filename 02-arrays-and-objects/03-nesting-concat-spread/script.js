const fruits= ['Apple', 'Grapes', 'Banana'];
const berries=['strawberry','blueberry','rasberry'];

// fruits.push(berries);

// x = fruits[3][1];

const allFruits = [fruits, berries];
//Nesting Array
x = allFruits[1][0];

//Concating
x = fruits.concat(berries);


//SpreadOperator
x =[...fruits, ...berries];

//Flatten Arrays

const arr = [1,2,[3,4], 5, [6,7], 8];

x = arr.flat();

// Static method on Array Object

x = Array.isArray('fruits');

x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;
const d = 4;

x = Array.of(a,b,c);

console.log(x);

