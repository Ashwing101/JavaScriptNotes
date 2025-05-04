const d = new Date(2022, 1, 10, 8, 0, 0);

const month = d.getMonth();
const hours = d.getHours();

switch(month){
case 1:
    console.log('It is January');
    break;

case 2:
    console.log('It is Feb');
    break;

 case 3:
    console.log('It is Mar');
    break;

default:
console.log('Other months');
}

switch(true){
    case hours < 12:
        console.log('Good Morning');
        break;
    
    case hours < 18:
        console.log('Good Afternoon');
        break;
    
     case hours < 20:
        console.log('Good Night');
        break;
    
    default:
    console.log('Other months');
    }