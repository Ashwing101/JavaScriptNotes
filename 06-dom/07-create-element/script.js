//Create a Dom element and insert in the document

const div = document.createElement('div');
div.className ='my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

//inneText is use to get and change the element
//div.innerText = 'Hello World';

const text  = document.createTextNode('Hello World')
div.appendChild(text);
document.body.appendChild(div);


// document.querySelector


//console.log(div);
