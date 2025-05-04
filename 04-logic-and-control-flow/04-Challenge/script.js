//Challenge
const num = '*';

function calculator(num, a, b){
    switch(num){
    case 1:
        return a * b; 
    break;

    case 2:
        return a + b ; 
    break;

    case 3:
        return a - b; 
    break;

    case 4:
        return a / b; 
    break;

    default:
        return 'Its an error';
    }
}
console.log(calculator(2, 6, 7));
