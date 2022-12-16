const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

// const num1 = Math.round(Math.random()) * 10;
// const num2 = Math.ceil(Math.random()) * 10;

// console.log(num1);
// console.log(num2);
// console.log(num1);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

// let score = 0;   (if we use this, then score will update to 0 everytime)

let score = JSON.parse(localStorage.getItem("score"));
  
if (!score) {
    score = 0;
}

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `what is ${num1} multiply by ${num2} ?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{ 
    const userAns = +inputEl.value
    if (userAns === correctAns) {
        score++;
        updateLocalStorage()
    }else{
        score--;
        updateLocalStorage()
    }    
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}