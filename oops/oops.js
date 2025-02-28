const user = {
    userName: "Akhilesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        //console.log("user details");
        //console.log(`userName: ${this.userName}`);
        console.log(this);              
    }
}
//console.log(user.userName);
//console.log(user.getUserDetails());
//console.log(this);

//const promiseOne = new Promise() // new --> constructor function()

function User(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User("Akhilesh", 3, true)
const userTwo = new User("hii", 7, false)
console.log(userOne.constructor);
//console.log(userTwo);





