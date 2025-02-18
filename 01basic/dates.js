let date = new Date()
console.log(date.toString());

console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toTimeString());


//Date ---> Object


let myDate = new Date(2025,0, 24) //month start form 0,(jan - 0)
console.log(myDate.toLocaleString());

let newDate = new Date("01-14-2025")
console.log(newDate.toLocaleString());


let timeStamp = Date.now()
console.log(timeStamp);
console.log(newDate.getTime());
console.log(newDate.getDate());



