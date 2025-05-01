const post ={
    id:1,
    title:'post one',
    body:'This is the body',
};

//Convert to JSON stringify
const str = JSON.stringify(post);

// Parse Json
const obj = JSON.parse(str);
console.log(obj);

