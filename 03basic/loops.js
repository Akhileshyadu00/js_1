// Iterations

// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5) {
       // console.log("5 is best number");
        
    }
    //console.log(element);
    
    
}


for (let i = 1; i <= 10; i++) {
    //console.log(`outer loop ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        //console.log(`inner loop ${j}`);
      // console.log(i + "*" + j + " , " + i*j);
       
        
    }
    
}

let heros = ["ironman", "thor", "antman"]

for (let index = 0; index < heros.length; index++) {
    const element = heros[index];
    //console.log(element);
    
    
}


// break and continue

for (let index = 1; index < 20; index++) {
    if (index == 5) {
       //console.log(`5 detected`);
        //console.log(`value of index is ${index}`);
        break
    }
   //console.log(`value of index is ${index}`); 
}



for (let index = 1; index < 20; index++) {
    if (index == 5) {
        //console.log(`5 detected`);
        //console.log(`value of index is ${index}`);
       continue
    }
   //console.log(`value of index is ${index}`); 
}



// while 

let index = 0

while (index <= 10) {
    //console.log(`value of index ${index}`); 
    index = index + 2
}



let user = ["a", "b", "c"]

let arr = 0
while (arr < user.length) {
    //console.log(`value is ${user[arr]}`);  
    arr = arr +1
}


// Do ... while

let score = 11

do {
    console.log(`Score is ${score}`);
    score ++;
    
} while (score <=10);
