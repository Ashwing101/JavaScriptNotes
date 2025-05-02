
//Challenge 1
// function celsius(temp){
//     return ((temp - 32) * 5)/9;
// }

//Arrow function
const celsius = (temp) => ((temp - 32) * 5)/9;

console.log(`The temperature is ${celsius(32)} \xB0C`);


// //Challenge 2
// const minMax = (num) => (Math.min(num));

//Challenge 2
function minMax(num){
    const min = Math.min(...num);
    const max = Math.max(...num);

    return{min,max}

}

console.log(minMax([1,4,2,5,6,8]));


//Challenge 3

((len, wid) =>{

    const area = len * wid;

    const output =`The area of the rectangle is ${area}`;

    console.log(output);
})(10, 5);

