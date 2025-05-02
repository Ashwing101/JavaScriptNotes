//window.alert('Hello')
// console.log(window.innerWidth);


const  x = 100;

console.log(x, 'in global');

function run(){
    console.log(window.innerHeight);
    console.log(x, 'in function');
}
if(true){
    console.log(x, 'in block');
}

function add(){
    const y = 50;
    const x = 1;//local scope
    console.log(x + y);
}

run();
add();