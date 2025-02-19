// Singleton.   ----> made by constructor   

//Object.create()



//const tinderUser = new Object();
const tinderUser = {} //-non-singleton
    tinderUser.id = "123";
    tinderUser.name = "asd"
    tinderUser.isLoggedIn = false

//console.log(tinderUser) 

const  regular = {
    email: "a@abc.com",
    fullname: {
        first: "akhil",
        last: "yadav"

    }
} 
//console.log(regular.fullname?.first);

const obj1 = {1: "a"}
const obj2 = {2: "b"}

const obj3 = Object.assign({}, obj1, obj2) //better documentation
//use spread also
//console.log(obj3)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));










// literal Object. //not singleton


const user = {
    name : "Akhilesh",
    "fullName" : "Akhilesh Yadav",
    age: 25,
    mob: "12344567890",
    lastLoginDays: ["Monday", "Saturday"],
    [Symbol]: "qwe1"  //use [] for symbol

}

//console.log(user);
//console.log(user.fullName);
//console.log(user[Symbol]);

//object.freeze(user)--- freeze


user.greeting = function() {
    console.log("Hello JS USer");
    
}
//console.log(user.greeting());

user.greeting1 = function() {
    console.log(`hello Js use ${this.name}`);
    
}

//console.log(user.greeting1());





