console.log(10 > 20 && 30 > 15 && 30 < 40);
console.log(10 > 20 || 30> 15);





let a;
a =10 && 20;

a =10 && 20;
a =10 && 20;
a =10 && 20;
a =10 && 20;


console.log(a)

// || will return the first truthy value or the last

let b;

b =10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined ;
console.log(b);

// ??- Rtrn the right side operand when the left is nill or undefined

let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = '' ?? 30;
console.log(c);