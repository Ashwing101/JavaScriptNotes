const coloObj = {
    'color1' : 'Red',
    'color2' : 'Yellow',
    'color3' : 'Blue',
    'color4' : 'Cream'
}

for(const key in coloObj){
    console.log(key, [coloObj[key]]);
}

const colorArr= ['Red','Cream','Yellow','Blue'];

for(const key in colorArr){
    console.log(colorArr[key]);
}