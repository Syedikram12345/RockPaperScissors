let userScore = 0;
let compScore = 0;



 const compIcons = {
  rock: document.getElementById("rock"),
  paper: document.getElementById("paper"),
  scissors: document.getElementById("scissors"),
};
const compChoices = document.querySelectorAll(".compChoice");
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".userChoice");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");



 const clearCompHighlight = () => {
  Object.values(compIcons).forEach(el => {
    el.style.outline = "none";
  });
 };


const drawGame = () => {
  msg.innerText = "Draw Game";
  msg.style.backgroundColor = "#b98b82";
};



const showWinner = (userWin, userChoice,compChoice) => {
  if(userWin){
    userScore ++;
    userScorePara.innerText = userScore;
    msg.innerText = "You won! ";
    msg.style.backgroundColor = "green";
  }else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = "You lose.";
    msg.style.backgroundColor = "red";
  }
}



const genCompChoice = () => {
  const options = ["rock" ,"paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  const choice = options[randIdx];
  clearCompHighlight();
  compIcons[choice].style.outline = "6px solid black";
    return options[randIdx];
};


const playGame = (userChoice) => {
  const compChoice = genCompChoice();
    if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};




choices.forEach(choice => {
  const userChoice = choice.getAttribute("id");
  choice.addEventListener("click", () =>
    {
      console.log("Clicked");
      playGame(userChoice);
    }); 
});