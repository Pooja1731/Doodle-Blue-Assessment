//sorting function

let strong=[40,10,5,20,30];
let result=strong.sort((a,b)=>a-b);
console.log(result);

//reduce method

let numbers=[10,20,30,40];
let res=numbers.reduce((total,num)=>{return total + num},0);
console.log(res);

//slice and splice

let number=[10,20,30,40,50];
let c=number.slice(1,3);
let d=number.splice(2,1);
console.log(c);
console.log(d);

//some 

let a=[10,20,30,40,50];
let b=a.some((n)=>{return n<30});
console.log(b);