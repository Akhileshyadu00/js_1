function setUserName(userName) {
    this.userName = userName;

}

function createUser(userName, email, password) {
    setUserName.call(this, userName)      // .call- to hold reference only

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@gmail.com", "123")
console.log(chai);
