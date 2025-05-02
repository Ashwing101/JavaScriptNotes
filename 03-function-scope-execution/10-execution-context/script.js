//Javascript is single thread

//Creation Phase
//Execution phase


const x1 = 100;
const y1 = 10;

function getSum(x, y){
    const sum = x + y;
    return sum;
}

const sum1 = getSum(x1,y1);
const sum2 = getSum(9,4);

console.log(sum1, sum2)