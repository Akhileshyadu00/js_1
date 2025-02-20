// this.name -> current context

// =>

const user = {
    name: "akhilesh",
    price: 999,

    welcomeMessage: function() {
        //console.log(`${this.name}, welcome to my website`);
        //console.log(this);
        
        
    }
}

//user.welcomeMessage()
//user.name = "yyyyyy"
//user.welcomeMessage()

//console.log(this);  // {} -> empty object on node


function chai() {
    let name = "akhilesh"
    console.log(this.name);  //undefined  //not use inside function
    
}
//chai()

const one = function() {
    let name = "akhilesj"
    //console.log(this.name);  //undefined. // same as above
    
}
//one()

const two = () => {
    let name = "akhilesh"
    //console.log(this.name);   // undefined 
    
}
//two()

// () => {}

//const add = (num1, num2) => {
 ////   return num1 + num2
//}

//console.log(add(3, 9))

const addtwo = (num1, num2) => num1 + num2  //implicit  return arrow()

console.log(addtwo(3,7));



