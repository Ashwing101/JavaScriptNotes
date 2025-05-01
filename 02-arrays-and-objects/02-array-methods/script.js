let x;

const arr =[45,32,6,37,33,88];

// arr.push(100);

// arr.pop();

// //to begining
// arr.unshift(99);

// // to remove from beinging
// arr.shift();

// //arr.reverse();

// x = arr.includes(788);

// x = arr.indexOf(45);

//x = arr.slice(0, 3);

//remove single element from the array -37 removed
//x = arr.splice(2,1);

//x = arr.shift();

x  =arr.splice(1,4).reverse().toString().charAt(0);

console.log(x);

