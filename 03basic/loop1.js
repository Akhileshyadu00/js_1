// for of loop


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num); 
}

const greeting =  "hello world"
for (const greet of greeting) {
    //console.log(`each char is ${greet}`);
}


// Maps() --> value be unique ,, not itterable


const map = new Map()
map.set('IN', "India")
map.set('FR', "France")

//console.log(map);

for (const [key, value] of map) {
   // console.log(key, value);
    
}

const myObject = {
    "game1" : " NFS",
    "game2" : "Spiderman"
}

for (const [key, value] of myObject) { // for not work in object
    //console.log(key, value);
    
    
}


