const balance  = new Number(100)
//console.log(typeof balance);
//console.log(balance);


//console.log(balance.toString().length);
//console.log(balance.toFixed(2));  //after decimal, precision value. (100.00)


const avg = 123.688887
//console.log(avg.toPrecision(3)) //precise value --> before decimal also include like number

const hundreds = 100000000
//console.log(hundreds.toLocaleString("en-IN"));



///// -------- MAths ------- /////

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.4444)); //4
console.log(Math.ceil(4.4444));  //5
console.log(Math.floor(4.4444));  //4

console.log(Math.min(4, 5, 6, 7));
console.log(Math.max(4, 5, 6, 7));



console.log(Math.random());  //provide value between (0 - 1)


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);







