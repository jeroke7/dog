// the DOM document object model
const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const resetButton = document.getElementById('reset')
const yourScore = document.querySelector('.user-score')
const compScore = document.querySelector('.computer-score')
const result = document.querySelector('.result')
const overall = document.querySelector('.overall')
const userImg = document.querySelector('.user-img')
const compImg = document.querySelector('.comp-img')

const choices = ['rock', 'paper', 'scissors']
let comp
let userScore = 0
let computerScore = 0
// recheck

// console.log(userImg)
// function rockBtnClick() {
//     // to change text of the result item
//     result.innerText = 'rock clicked'
// }
// function paperBtnClick() {
//     result.innerText = 'paper clicked'
// }
// function scissorsBtnClick() {
//     result.innerText = 'scissors clicked'
// }
rockButton.addEventListener('click', () => {
    userImg.src = "../img/rps" + rockButton.id + ".png"
    compChoice()
    winLose(rockButton.id)
    // userScore = userScore + 1
    // result.innerText = userScore.toString()
})
paperButton.addEventListener('click', () => {
    userImg.src = "../img/rps" + paperButton.id + ".png"
    compChoice()
    winLose(paperButton.id)
    // userScore = userScore + 1
    // result.innerText = userScore.toString()
})
scissorsButton.addEventListener('click', () => {
    userImg.src = "../img/rps" + scissorsButton.id + ".png"
    compChoice()
    winLose(scissorsButton.id)
    // userScore = userScore + 1
    // result.innerText = userScore.toString()
})

function compChoice () {
    const randNum = Math.floor(Math.random()*3)
    comp = choices[randNum]
    // console.log(comp)
    compImg.src = "../img/rps" + comp + ".png"
}

function winLose(userChoice) {
    if (userChoice == "rock" && comp == "paper"){
        result.innerText = 'Computer point'
        computerScore = computerScore + 1
        compScore.innerText = computerScore
    } else if (userChoice == "scissors" && comp == "rock"){
        result.innerText = 'Computer point'
        computerScore = computerScore + 1
        compScore.innerText = computerScore
    } else if (userChoice == "paper" && comp == "scissors"){
        result.innerText = 'Computer point'
        computerScore = computerScore + 1
        compScore.innerText = computerScore
    } else if (comp == "rock" && userChoice == "paper"){
        result.innerText = 'Your point'
        userScore = userScore + 1
        yourScore.innerText = userScore
    } else if (comp == "paper" && userChoice == "scissors"){
        result.innerText = 'Your point'
        userScore = userScore + 1
        yourScore.innerText = userScore
    } else if (comp == "scissors" && userChoice == "rock"){
        result.innerText = 'Your point'
        userScore = userScore + 1
        yourScore.innerText = userScore
    } else if (comp == "rock" && userChoice == "rock"){
        result.innerText = 'Tie!'
    } else if (comp == "paper" && userChoice == "paper"){
        result.innerText = 'Tie!'
    } else if (comp == "scissors" && userChoice == "scissors"){
        result.innerText = 'Tie!'
    }
    scoreCheck()
}
resetButton.addEventListener('click', () => {
userImg.src = "../img/rpsall.png" 
compImg.src = "../img/rpsall.png" 
userScore = 0
yourScore.innerText = userScore
computerScore = 0
compScore.innerText = computerScore
result.innerText = 'Start Game'
overall.innerText = '--'
})

function scoreCheck() {
    if (userScore == 3){
        overall.innerText = 'You win! :)'
        // userScore = userScore
        // yourScore.innerText = userScore
        // computerScore = computerScore
        // compScore.innerText = computerScore
        result.innerText = 'Reset Game'
    } else if (computerScore == 3){
        overall.innerText = 'You Lose! :('
        // userScore = userScore
        // yourScore.innerText = userScore
        // computerScore = computerScore
        // compScore.innerText = computerScore
        result.innerText = 'Reset Game'
    }
}




