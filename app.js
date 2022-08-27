const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const lizard = document.getElementById("lizard")
const Spock = document.getElementById("Spock")
const computerChoice = document.getElementById("computer-choice")
const playerChoice = document.getElementById("player-choice")
const result = document.getElementById("result")
let choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]
let cScoreBoard = document.getElementById('c-score-board')
let cScore = 0
let pScoreBoard = document.getElementById('p-score-board')
let pScore = 0

cScoreBoard.innerHTML = cScore
pScoreBoard.innerHTML = pScore

function randomChoice() {
  return Math.floor(Math.random() * choices.length)
}

const win = () => {
  result.innerText = "You Win!"
  pScore++
  pScoreBoard.innerHTML = pScore 
}

const lose = () => {
  result.innerText = "You Lose!"
  cScore++
  cScoreBoard.innerHTML = cScore 
}

const tie = () => {
  result.innerText = "Tie!"
}

function displayResult() {
  if (playerChoice.innerText === computerChoice.innerText) {
    tie();
  } else if (playerChoice.innerText === "Rock" && computerChoice.innerText === "Paper") {
    lose();
  } else if (playerChoice.innerText === "Rock" && computerChoice.innerText === "Spock") {
    lose();
  } else if (playerChoice.innerText === "Rock" && computerChoice.innerText === "Scissors") {
    win();
  } else if (playerChoice.innerText === "Rock" && computerChoice.innerText === "Lizard") {
    win();
  } else if (playerChoice.innerText === "Paper" && computerChoice.innerText === "Scissors") {
    lose();
  } else if (playerChoice.innerText === "Paper" && computerChoice.innerText === "Lizard") {
    lose();
  } else if (playerChoice.innerText === "Paper" && computerChoice.innerText === "Rock") {
    win();
  } else if (playerChoice.innerText === "Paper" && computerChoice.innerText === "Spock") {
    win();
  } else if (playerChoice.innerText === "Scissors" && computerChoice.innerText === "Rock") {
    lose();
  } else if (playerChoice.innerText === "Scissors" && computerChoice.innerText === "Spock") {
    lose();
  } else if (playerChoice.innerText === "Scissors" && computerChoice.innerText === "Paper") {
    win();
  } else if (playerChoice.innerText === "Scissors" && computerChoice.innerText === "Lizard") {
    win();
  } else if (playerChoice.innerText === "Lizard" && computerChoice.innerText === "Rock") {
    lose();
  } else if (playerChoice.innerText === "Lizard" && computerChoice.innerText === "Scissors") {
    lose();
  } else if (playerChoice.innerText === "Lizard" && computerChoice.innerText === "Paper") {
    win();
  } else if (playerChoice.innerText === "Lizard" && computerChoice.innerText === "Spock") {
    win();
  } else if (playerChoice.innerText === "Spock" && computerChoice.innerText === "Paper") {
    lose();
  } else if (playerChoice.innerText === "Spock" && computerChoice.innerText === "Lizard") {
    lose();
  } else if (playerChoice.innerText === "Spock" && computerChoice.innerText === "Rock") {
    win();
  } else if (playerChoice.innerText === "Spock" && computerChoice.innerText === "Scissors") {
    win();
  }
}


rock.addEventListener("click", function() {
  playerChoice.innerText = "Rock"
  computerChoice.innerText = choices[randomChoice()]
  displayResult()
})

paper.addEventListener("click", function() {
  playerChoice.innerText = "Paper"
  computerChoice.innerText = choices[randomChoice()]
  displayResult()
})

scissors.addEventListener("click", function() {
  playerChoice.innerText = "Scissors"
  computerChoice.innerText = choices[randomChoice()]
  displayResult()
})

lizard.addEventListener("click", function() {
  playerChoice.innerText = "Lizard"
  computerChoice.innerText = choices[randomChoice()]
  displayResult()
})

Spock.addEventListener("click", function() {
  playerChoice.innerText = "Spock"
  computerChoice.innerText = choices[randomChoice()]
  displayResult()
})