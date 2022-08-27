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

function displayResult() {
  if (playerChoice.innerText === computerChoice.innerText) {
    result.innerText = "Tie!"
  } else if (playerChoice.innerText === "Rock" && computerChoice.innerText === "Paper") {
    result.innerText = "You Lose!"
    cScore++
    cScoreBoard.innerHTML = cScore
  } else if (playerChoice.innerText === "Rock" && computerChoice.innerText === "Spock") {
    result.innerText = "You Lose!"
    cScore++
    cScoreBoard.innerHTML = cScore
  } else if (playerChoice.innerText === "Rock" && computerChoice.innerText === "Scissors") {
    result.innerText = "You Win!"
    pScore++
    pScoreBoard.innerHTML = pScore
  } else if (playerChoice.innerText === "Rock" && computerChoice.innerText === "Lizard") {
    result.innerText = "You Win!"
    pScore++
    pScoreBoard.innerHTML = pScore
  } else if (playerChoice.innerText === "Paper" && computerChoice.innerText === "Scissors") {
    result.innerText = "You Lose!"
    cScore++
    cScoreBoard.innerHTML = cScore
  } else if (playerChoice.innerText === "Paper" && computerChoice.innerText === "Lizard") {
    result.innerText = "You Lose!"
    cScore++
    cScoreBoard.innerHTML = cScore
  } else if (playerChoice.innerText === "Paper" && computerChoice.innerText === "Rock") {
    result.innerText = "You Win!"
    pScore++
    pScoreBoard.innerHTML = pScore
  } else if (playerChoice.innerText === "Paper" && computerChoice.innerText === "Spock") {
    result.innerText = "You Win!"
    pScore++
    pScoreBoard.innerHTML = pScore
  } else if (playerChoice.innerText === "Scissors" && computerChoice.innerText === "Rock") {
    result.innerText = "You Lose!"
    cScore++
    cScoreBoard.innerHTML = cScore
  } else if (playerChoice.innerText === "Scissors" && computerChoice.innerText === "Spock") {
    result.innerText = "You Lose!"
    cScore++
    cScoreBoard.innerHTML = cScore
  } else if (playerChoice.innerText === "Scissors" && computerChoice.innerText === "Paper") {
    result.innerText = "You Win!"
    pScore++
    pScoreBoard.innerHTML = pScore
  } else if (playerChoice.innerText === "Scissors" && computerChoice.innerText === "Lizard") {
    result.innerText = "You Win!"
    pScore++
    pScoreBoard.innerHTML = pScore
  } else if (playerChoice.innerText === "Lizard" && computerChoice.innerText === "Rock") {
    result.innerText = "You Lose!"
    cScore++
    cScoreBoard.innerHTML = cScore
  } else if (playerChoice.innerText === "Lizard" && computerChoice.innerText === "Scissors") {
    result.innerText = "You Lose!"
    cScore++
    cScoreBoard.innerHTML = cScore
  } else if (playerChoice.innerText === "Lizard" && computerChoice.innerText === "Paper") {
    result.innerText = "You Win!"
    pScore++
    pScoreBoard.innerHTML = pScore
  } else if (playerChoice.innerText === "Lizard" && computerChoice.innerText === "Spock") {
    result.innerText = "You Win!"
    pScore++
    pScoreBoard.innerHTML = pScore
  } else if (playerChoice.innerText === "Spock" && computerChoice.innerText === "Paper") {
    result.innerText = "You Lose!"
    cScore++
    cScoreBoard.innerHTML = cScore
  } else if (playerChoice.innerText === "Spock" && computerChoice.innerText === "Lizard") {
    result.innerText = "You Lose!"
    cScore++
    cScoreBoard.innerHTML = cScore
  } else if (playerChoice.innerText === "Spock" && computerChoice.innerText === "Rock") {
    result.innerText = "You Win!"
    pScore++
    pScoreBoard.innerHTML = pScore
  } else if (playerChoice.innerText === "Spock" && computerChoice.innerText === "Scissors") {
    result.innerText = "You Win!"
    pScore++
    pScoreBoard.innerHTML = pScore
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