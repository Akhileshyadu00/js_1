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