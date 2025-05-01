const library= [
{
    title:'Love me',
    author:'Charles',
    status: {
        own : true,
        reading : false,
        read : false,
    }
},
{
    title:'I Hate you',
    author:'Charly',
    status: {
        own : true,
        reading : false,
        read : false,
    }
},
{
    title:'Good Bye',
    author:'Ashwini',
    status: {
        own : true,
        reading : false,
        read : false,
    }
}];

//Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3
const {title: firstbook} = library[0];

console.log(firstbook)

//Step 4
const json = JSON.stringify(library);
console.log(json);