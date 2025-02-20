function name() {
    console.log("Heloo function");
    
}
// name();

function add(num1, num2) {
    //let result = num1 + num2
   // return result

   return num1 + num2
}

const result = add(2,5)
//console.log(result);

function loginMessage(userName) {
    if(!userName) {
        console.log("Please enter username");
        return //after return not work
        
    }
    return `${userName} just logged in`

}

//console.log(loginMessage("akhilesh"))
//console.log(loginMessage());


// ... rest/spread //

function calculatePrice(...num3) {   //Rest Operator
    return num3
}
//console.log(calculatePrice(200, 300, 400));

const user = {
    name: "akhiles",
    price: 199
}

function handleObject(anyobject) {
    //console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
    
}

//handleObject(user)

handleObject({
    name: "akhilesh",
    price: 199
})

const array = [100, 200, 300]

function returnSecondValue(getArray) {
    return getArray[1]
}

//console.log(returnSecondValue(array));






