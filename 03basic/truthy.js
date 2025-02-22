// TRUTHY / FALSY

const userEmail = []

if(userEmail) {
    //console.log("Got Email");
    
}else {
    //console.log("not have email");
    
}

//Falsy Value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy Value
// "0", "false", "_", [], {}, function(){}

if(userEmail.length ===0) {
    //console.log("Array is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
//val1 = null ?? 10 ?? 15

//console.log(val1);


// Terniary Operator

//condition ? true : false

const price = 100
price >=80 ? console.log("less than 80") : console.log("more than 80");



