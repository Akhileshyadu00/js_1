let myName = "Akhilesh    "

//console.log(myName.length);
// truelength 





//inheritance

const user = {
    name: "chai",
    email: "a@gmail.com"
}

const teacher = {
    makeVideo: true

}

const support = {
    isavailabale: true
}

const TAsupport = {
    makeAssisgnment: "JS",
    fullTime: true,
    __proto__: support
}

//teacher.appendChild(support, TAsupport)

teacher.__proto__ = user

//console.log(teacher);

//modern Syntax
Object.setPrototypeOf(support, teacher)

let anotherUser = "Akhilesh.      "

String.prototype.trueLength = function() {
    //console.log(`${this.name}`);
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`); 
    
}
anotherUser.trueLength()
"one".trueLength()
"two".trueLength()


