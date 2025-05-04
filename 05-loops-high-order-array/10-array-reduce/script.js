//Reduce array to asingle value
//Example shopping cart with nmutiple product value


const array= [1,2,3,4,5,6,7,8,9];

const sum = array.reduce(function(num, num2){
 return num + num2;
}, 0)

const sum1  =array.reduce((acc,cur) => {
return acc +cur;
}, 0)


//Using a for loop

const sum2 = () =>{
    let acc =0;
    for(const cur of array){
        acc += cur;
    }
    return acc;
}

// console.log(sum2());


//Shooping cart

const cart =[
    {id:1, name:'Product 1', price:130},
    {id:2, name:'Product 2', price:150},
    {id:3, name:'Product 3', price:160},
];

const sumTot = cart.reduce((acc, product)=>{
    return acc + product.price;
}, 0)

console.log(sumTot);