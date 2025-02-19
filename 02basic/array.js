const array = [];

// may be resizable, mix, nested array,  Zero based Indexing

//Shallow Copy - properties share the same reference point i.e change to original array also (call by reference)
//Deep Copy - change to original not occur

// not associated array

const heros = ["akhilesh, akhilesh1, akhilesh2"];
//console.log(heros);

const array1 = new Array(1,2,3,4,5);
//console.log(array1[1]);


//Array Method

//array1.push(6);  //add after
//array1.push(7,8);
//array1.pop()

//array1.unshift(9); //add at start
//array1.shift();   //remove at start

//console.log(array1.includes(4)) //element present or not
//console.log(array1.indexOf(3));

//const newarray = array1.join(). //convert to string
//console.log(array1);
//console.log(typeof newarray);


//Splice, slice

//console.log("A", array1);
const new1 = array1.slice(1, 3);  //start from 1 to 2, not include 3rd index
//console.log(new1);
//console.log("B", array1);

const new2 = array1.splice(1, 3);  // add last index also
//console.log("C", array1);
//console.log(new2);


const num = [0, 1, 2, 3, 4, 5,6];
const alpha = ["one", "two", "three"];

//num.push(alpha);  array inside array
//console.log(num);

const all = num.concat(alpha);   //return new array
//console.log(all);

const allnew = [...num, ...alpha]
//console.log(allnew);


const another = [1, 2, 3, [4, 5, 6, 7], 7, [6, 7],[4,5]]
const real = another.flat(Infinity);
//console.log(real);


//console.log(Array.isArray("akhilesh"));
//console.log(Array.from("Akhilesh")); 
//console.log(Array.from({name: "Akhilesh"}));  //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

//console.log(Array.of(score1, score2, score3));




















