class User {
    constructor(userName) {
        this.userName = userName;
    }

    logMe() {
        console.log(`userName is ${this.userName}`);  
    }

}


class Teacher extends User {
    constructor(userName, email, password) {
        super(userName)
       // this.userName = userName;
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`New course was ${this.userName}`);
        
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "12333")

chai.addCourse()

const masalachai = new User("masalachai");
masalachai.logMe()
chai.logMe()

console.log(chai instanceof Teacher); //

