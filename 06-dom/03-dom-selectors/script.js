//Get element by ID

console.log(document.getElementById('page-title'));
console.log(document.getElementById('page-title').id);
console.log(document.getElementById('page-title').getAttribute('id'));

//Set Attributes
// document.getElementById('page-title').title ='My-List';
// document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('page-title');

// //Get/change the  content of the element

console.log(title.textContent);
title.textContent ='Hello World';
title.innerText ='Hello Again';
title.innerHTML='<Strong>Shopping List</Strong>';

//Change Style

title.style.color = 'red';
title.style.backgroundColor= 'black';
title.style.padding='10px';
title.style.borderRadius='10px';

//documnet.querySelector()
console.log(document.querySelector('h1'));
console.log(document.querySelector('#page-title'));
console.log(document.querySelector('.container'));


// const btnn = document.querySelector('.btn');
// console.log(btnn);
// btnn.innerText = 'Add Again';

const list = document.querySelector('#item-list');  
console.log(list);

const firstItem = list.querySelector('li');
firstItem.style.color = 'red';
