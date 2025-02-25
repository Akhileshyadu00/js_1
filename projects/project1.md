# Project related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1

```javascript
console.log("akhilesh)

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach( (btn) => {
  console.log(btn);
  btn.addEventListener("click", (e) => {
    console.log(e)
    console.log(e.target)

    if(e.target.id === "grey") {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "white") {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "blue") {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "purple") {
      body.style.backgroundColor = e.target.id
    }

  } )
})



```



## project2  solution

```javascript

const form = document.querySelector("form");



form.addEventListener("submit", (e) => {
  e.preventDefault()

  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const results = document.querySelector("#results")

  if(height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please five a valid hieght ${height}`;
  }
  if(weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please five a valid hieght ${weight}`;
  }else {
    const bmi = (weight /((height*height)/10000)).toFixed(2);

    //results.innerHTML = `<span>${bmi}</span>`;
    if(bmi <18.6) {
      results.innerHTML = `<span>${bmi} under weight</span>`;
    }
    if(bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>${bmi} Normal Range</span>`;
    }
    if(bmi > 24.9) {
      results.innerHTML = `<span>${bmi} Over weight</span>`;
    }

  }

})
```


## project 3 solution

``` javascript

const clock = document.getElementById("clock");



setInterval( () => {
  let date= new Date()
  console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
},1000)

```
## project 4

``` javascript

// Generate random number
let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const guessLast = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const para = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form submission
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// Validation Guess
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number not less than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      guessDisplay(guess);
      displayMessage(`Game Over! The random number was ${randomNumber}`);
      endGame();
    } else {
      guessDisplay(guess);
      checkGuess(guess);
    }
  }
}

// Check Guess
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("Congratulations! You guessed it right.");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is too low.");
  } else {
    displayMessage("Number is too high.");
  }
}

// Display Guess
function guessDisplay(guess) {
  userInput.value = ""; // Clears the input field
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  guessLast.innerHTML = `${11 - numGuess}`;
}

// Display Message
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// End Game
function endGame() {
  userInput.setAttribute("disabled", "true"); // Disable input
  submit.setAttribute("disabled", "true"); // Disable submit button

  para.classList.add("button");
  para.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(para);
  playGame = false;

  document.querySelector("#newGame").addEventListener("click", newGame);
}

// New Game
function newGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1; // Reset random number
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = "";
  guessLast.innerHTML = `${11 - numGuess}`;
  lowOrHi.innerHTML = "";

  userInput.removeAttribute("disabled");
  submit.removeAttribute("disabled");

  startOver.removeChild(para);
  playGame = true;
}


```
