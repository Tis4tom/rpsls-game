
const gameButtons = document.querySelectorAll(".game-button")
const computerChoice = document.getElementById("computer-choice")
const playerChoice = document.getElementById("player-choice")
const result = document.getElementById("result")
const resultReason = document.getElementById("result-reason")
const reasons = [
  "Scissors cut Paper", 
  "Paper covers Rock",
  "Rock crushes Lizard",
  "Lizard poisons Spock",
  "Spock smashes Scissors",
  "Scissors cut Lizard",
  "Lizard eats Paper",
  "Paper disproves Spock",
  "Spock vaporizes Rock",
  "Rock crushes Scissors"
]

document.getElementById("tagline").innerText = reasons.join(', ')

let cScoreBoard = document.getElementById('c-score-board')
let pScoreBoard = document.getElementById('p-score-board')
cScoreBoard.innerHTML = `Computer: 0`
pScoreBoard.innerHTML = `Player: 0`
let pScore = 0
let cScore = 0

computerChoice.innerText = "computer choice"
playerChoice.innerText = "player choice"
result.innerText = "Choose your weapon"
resultReason.innerText = "For a chance to say 'Bazinga!'"


const win = () => {
  result.innerText = "You Win!"
  pScore++
  pScoreBoard.innerHTML = `Player: ${pScore}` 
}

const lose = () => {
  result.innerText = "You Lose!"
  cScore++
  cScoreBoard.innerHTML = `Computer: ${cScore}` 
}

const tie = () => {
  result.innerText = "Tie!"
}

function displayResult() {
  if (playerChoice.innerText === computerChoice.innerText) {
    tie();
    resultReason.innerText = "No point";
  } else if (playerChoice.innerText === "Rock" && computerChoice.innerText === "Paper") {
    lose();
    resultReason.innerText = reasons[1];
  } else if (playerChoice.innerText === "Rock" && computerChoice.innerText === "Spock") {
    lose();
    resultReason.innerText = reasons[8];
  } else if (playerChoice.innerText === "Rock" && computerChoice.innerText === "Scissors") {
    win();
    resultReason.innerText = reasons[9];
  } else if (playerChoice.innerText === "Rock" && computerChoice.innerText === "Lizard") {
    win();
    resultReason.innerText = reasons[2];
  } else if (playerChoice.innerText === "Paper" && computerChoice.innerText === "Scissors") {
    lose();
    resultReason.innerText = reasons[0];
  } else if (playerChoice.innerText === "Paper" && computerChoice.innerText === "Lizard") {
    lose();
    resultReason.innerText = reasons[6];
  } else if (playerChoice.innerText === "Paper" && computerChoice.innerText === "Rock") {
    win();
    resultReason.innerText = reasons[1];
  } else if (playerChoice.innerText === "Paper" && computerChoice.innerText === "Spock") {
    win();
    resultReason.innerText = reasons[7];
  } else if (playerChoice.innerText === "Scissors" && computerChoice.innerText === "Rock") {
    lose();
    resultReason.innerText = reasons[9];
  } else if (playerChoice.innerText === "Scissors" && computerChoice.innerText === "Spock") {
    lose();
    resultReason.innerText = reasons[4];
  } else if (playerChoice.innerText === "Scissors" && computerChoice.innerText === "Paper") {
    win();
    resultReason.innerText = reasons[0];
  } else if (playerChoice.innerText === "Scissors" && computerChoice.innerText === "Lizard") {
    win();
    resultReason.innerText = reasons[5];
  } else if (playerChoice.innerText === "Lizard" && computerChoice.innerText === "Rock") {
    lose();
    resultReason.innerText = reasons[2];
  } else if (playerChoice.innerText === "Lizard" && computerChoice.innerText === "Scissors") {
    lose();
    resultReason.innerText = reasons[5];
  } else if (playerChoice.innerText === "Lizard" && computerChoice.innerText === "Paper") {
    win();
    resultReason.innerText = reasons[6];
  } else if (playerChoice.innerText === "Lizard" && computerChoice.innerText === "Spock") {
    win();
    resultReason.innerText = reasons[3];
  } else if (playerChoice.innerText === "Spock" && computerChoice.innerText === "Paper") {
    lose();
    resultReason.innerText = reasons[7];
  } else if (playerChoice.innerText === "Spock" && computerChoice.innerText === "Lizard") {
    lose();
    resultReason.innerText = reasons[3];
  } else if (playerChoice.innerText === "Spock" && computerChoice.innerText === "Rock") {
    win();
    resultReason.innerText = reasons[8];
  } else if (playerChoice.innerText === "Spock" && computerChoice.innerText === "Scissors") {
    win();
    resultReason.innerText = reasons[4];
  }
}

/* Loop over game buttons, add event listener for click, return random number indexed to choices array
for computer choice,replace player choice text with button clicked text, 
display computer and player choice html, execute display functiion to decide winner */

for (let gameButton of gameButtons) {
  const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]
  gameButton.addEventListener("click", function() {
    function randomChoice() {
      return Math.floor(Math.random() * choices.length)
    }
    playerChoice.innerText = this.innerText;
    computerChoice.innerText = choices[randomChoice()]
    displayResult()
  })
}

