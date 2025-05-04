const numbers = [1,2,3,4,5];

const doubleNum = numbers.map((num) => 'Number ' + num * 2);

//  console.log(doubleNum);


 // for each
 
//  let num=[];
//  numbers.forEach((num1)=>{
//    num.push(num1 * 2);
// });


//Same for the foreach

let evenNumbers= [];

numbers.forEach((num)=>{
    evenNumbers.push(num * 2);
});

console.log("Number " + evenNumbers);

//  console.log(" values " + num);


let companies =[{name:'Company one' , category:'Finanace', start:1981, end:2009},
    {name:'Company one' , category:'Finanace', start:1991, end:2009},
    {name:'Company two' , category:'Sports', start:1881, end:2009},
    {name:'Company three' , category:'Doctor', start:1891, end:2009},
    {name:'Company four' , category:'Insurance', start:1981, end:2019},
    {name:'Company five' , category:'Auto', start:1981, end:2015},
    {name:'Company six' , category:'Education', start:1971, end:2009},
    {name:'Company seven' , category:'Freelance', start:2001, end:2009},
    {name:'Company eight' , category:'Retail', start:2001, end:2009}
]


//Create an array of company names

const val = companies.map((data) => data.name);


//Create an array of company names and category
const comInfo = companies.map((companie) => {
    return {
        name:companie.name,
        category:companie.category
    }

})



//Create an array of obj with the name and the length of each company in year

const companyYear = companies.map((data)=>{
return{

    name: data.name,
    length: data.end-data.start + ' Years',

}
})


//chaining map method

const squareDouble = numbers
.map((num)=> Math.sqrt(num))
.map((sqrt)=> 2 * sqrt);


const squareDouble2 = numbers.
map(function(num){
    return Math.sqrt(num);
    })
.map(function(num2){
        return 2 * num2;
    })
.map(function(squareRotDouble){
        return squareDouble*2;
    })

//Chaining Different methods

const evenDouble = numbers.filter(function(num){
    return num % 2 ==0;
}).map((num2)=> num2 * 2);

console.log("Value of", evenDouble);