// ES6

// Constructor

class user {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }
    userName() {
       return `${this.name.toUpperCase()}`
    }
}
const chai = new user("chai", "abc@gmail.com", "123");
console.log(chai.encryptPassword());
console.log(chai.userName());


function User1() {
        this.name = name;
        this.email = email;
        this.password = password;
}

User1.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const tea = new user("tea", "abc@gmail.com", "1234");
console.log(tea.encryptPassword());

