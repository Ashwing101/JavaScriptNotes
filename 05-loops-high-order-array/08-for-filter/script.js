const nums = [1,2,3,4,5,6,7,8,9,10];

// const evenNum = nums.filter(function(num){
//     return num % 2 === 0;
// })


//Short versionof above code

const evenNumber = nums.filter((num) => num % 2 ===0)

// console.log(evenNumber);

//Same for the foreach

let evenNumbers= [];

nums.forEach((num )=>{
    evenNumber.push(num);
});

console.log("Even " + evenNumber);




