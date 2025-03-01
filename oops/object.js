function multiply5(num) {
    return num * 5;
}

multiply5.power = 2;

console.log(multiply5(5));
console.log(multiply5.power);
console.log(multiply5.prototype);


function createUser(userName, score) {
    this.userName = userName;
    this.score = score;
}

createUser.prototype.increament = function() {
    this.score++;
}

createUser.prototype.print = function() {
    console.log(`score is ${this.score}`);
    
}

const chai = new createUser("Chai", 25);
const tea =  new createUser("tea", 250);

tea.print()

//A new object is creted: new initaite the creation of new javascript object

//A prtototypes is linked: new keywords provide constructor

//Constructor is called

//new object is returned



