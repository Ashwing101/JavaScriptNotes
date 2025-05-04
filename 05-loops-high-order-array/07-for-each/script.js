const socials =['Twitter', 'Linkedin', 'Facebook', 'Instagram'];

// console.log(socials.__proto__);

// socials.forEach(function(item){ //Anonymous Function or callback function
// console.log(item);
// })

// socials.forEach((item)=> console.log(item)); //Anonymous Function


  
socials.forEach((item, index, arr) => console.log(`${index}` - `${item}`, arr));

const socialObj = [
    {name: 'Linkedin', url:'https://linkedin.com'},
    { name: 'Twitter', url:'https://twitter.com'},
    { name: 'Instagram', url:'https://insta.com'}
];

socialObj.forEach((item) => console.log(item.url));