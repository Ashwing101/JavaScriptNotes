//Get child element from the parent and if their respective
//siblings

let output;

const parent = document.querySelector('.parent');
output = parent.children;
//output = parent.children[1];
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText= 'Child Text';
parent.children[1].style.color= 'Blue';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';


//Get Parent Element from child

const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border='1px solid #ccc';
child.parentElement.style.padding='1px';

//Sibling Element

const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color='green';
secondItem.previousElementSibling.style.color='orange';

console.log(output);
