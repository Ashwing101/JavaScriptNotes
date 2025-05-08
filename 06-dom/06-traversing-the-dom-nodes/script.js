// same as the traversing the dom element 
//Just it gives you more detailing 
//for example : Parent conetnt with comment and text
//Can access the parent from children, siblings(Next and previous) and more

let output;

const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;



console.log(output)