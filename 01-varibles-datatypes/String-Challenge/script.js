let str = 'developer';

//Solution 1
let ch = str[0].toUpperCase() + str.substring(1);
console.log(ch);

//Solution 2
str = `${str[0].toUpperCase()}${str.substring(1)}`;
//console.log(str)

