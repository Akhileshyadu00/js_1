//   {} --> Scope

// var ---> global scope,   accessed outside also

// Closure --> child can access parent value

function one() {
    const name = "akhilesh"

    function two() {
       const site = "youtube"
       //console.log(name);
       
    }
    //console.log(site);
    
    two()
}
one()



// Intersting Concept


console.log(addone(5));  // this possible 

function addone(num) {
    return num +1

}
//addone(5)


addtwo(5)   // not due to hoisting
const addtwo = function(num) {        //expression
    return num + 2
}

addtwo(5)

