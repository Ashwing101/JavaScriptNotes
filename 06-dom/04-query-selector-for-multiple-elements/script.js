// querySelectorAll()

const listItems = document.querySelectorAll('.items li');
console.log(listItems);


// listItems[1].stle.color = 'red';


// listItems.forEach((item, index) =>{

//     item.stle.color= 'red';

//     if(index === 1){
//         item.remove();
//     }

//     if(index === 0){
//         item.innerText= 'Oranges';
//     }     
// });


const listItems2 = document.getElementsByClassName('items');

console.log(listItems2[2].innerText);

//Need to convert form HTML content to Array

const listItemArray = Array.from(listItems2)

listItemArray.forEach((item) => {
console.log(item.innerText);
});

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[0].innerText);
