output = document.links[0].href;
output= document.scripts;
output= document.body.children;
output= document.links[0].href = 'https://google.com';
//All and all you can get everything on the js page using document.

//For images

output = document.images;
output = document.images[0].src;

//To convert to array
const forms= Array.form(document.forms);



console.log(output);