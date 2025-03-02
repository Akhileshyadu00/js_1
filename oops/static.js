class User {
    constructor(userName) {
        this.userName = userName;
    }
    logMe() {
        console.log(`userName: ${this.userName}`);
        
    }

    static createId() { // prevent to taking reference
        return `123`;
    }

}

const me = new User("Akhiklesh")
console.log(me.createId());

class Teacher {
    constructor(userName, email, password) {
        super(userName);
        this.email = email;
        this.password = password;
        
    }
}

const chai = new Teacher("iphone", "i@gmail.com", "123")
chai.logM


