const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby"
}

for (const key in myObject) {
   //console.log(`${key} shortcut is ${myObject[key]}`);
   
}

const hero = ["a", "b", "c", "d"]

for (const key in hero) {
   //console.log(hero[key]);
   
}

const map = new Map()
map.set('IN', "India")
map.set('FR', "France")

for (const key in map) {
    //console.log(key);  // map not itterable
    
}


// for each

//callback - function inside function, called as parameter to another, no name to callback

const coding = ["a", "b", "c", "d","e"]

coding.forEach(function(item) {
   // console.log(item);
    
}  )

coding.forEach( (item) => {
    //console.log(item);
    
} )

function print(item) {
   // console.log(item);
    
}
coding.forEach(print)

coding.forEach( (item, index, arr) =>  {
    //console.log(item, index, arr);
    
} )

const myCoding = [
    {
        name: "javascript",
        file: "js"
    },
    {
        name: "java",
        file: "jv"
    },
    {
        name: "react",
        file: "rc"
    }
]

myCoding.forEach( (item) => {

    console.log(item.name);
    
} )