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

