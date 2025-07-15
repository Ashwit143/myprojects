let userScore = 0;
let compScore = 0;
let myScore = document.querySelector(".myScore")
let computerScore = document.querySelector(".compScore")
let msg = document.querySelector(".msg");

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

const choices = document.querySelectorAll(".choices");

let arr = ["rock", "paper", "scissors"];

const compChoice = () => {
    const val = Math.floor(Math.random() * 3);
    computerChoice = arr[val];
    return computerChoice;
}


checkWinner = (a, b) => {
    if(a === b){
     msg.innerText = `It is a draw `;
     msg.style.backgroundColor = "#000814";
    }
    else if(a === "rock" && b === "scissors" ||  a === "scissors" && b === "paper" || a === "paper" && b === "rock"){
        userScore++;
        myScore.innerText = userScore;
        msg.innerText = `You Win as your ${a} beats computer's ${b} `;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        computerScore.innerText = compScore;
        msg.innerText = `You lost as computer's ${b} beats your ${a} `;
        msg.style.backgroundColor = "red";
    }
}
      

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        compChoice();
        checkWinner(userChoice,compChoice());
    })
})