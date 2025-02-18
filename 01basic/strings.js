// "" / ''

const name = "Akhilesh Yadav";
const id = "11";

console.log(name + id);
console.log(`hello, ${name}, and id is ${id}`);

// --proto--

// .toUpperCase()
// .charAt(2). at index what character
// .indexOf("h"). at which index character lies

const newName = name.substring(1,4)
console.log(newName);

const secName = name.slice(0, 4)
console.log(secName);

const sec1Name = name.slice(-4, 4);  //not workk
console.log(sec1Name);  // negative allowed


const three = "   akhilesh  "  //remove start and end space--- white space and line termination
console.log(three);
console.log(three.trim());

const url = "https://google.com/akhilesh%20yadav"
console.log(url.replace("%20", "-"));

//include -- if present true, else false


//split

console.log(name.split(" "));
console.log(name.bold())



