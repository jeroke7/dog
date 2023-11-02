// the DOM document object model
const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const result = document.querySelector('.result')
const userImg = document.querySelector('.user-img')
const compImg = document.querySelector('.comp-img')

const choices = ['rock', 'paper', 'scissors']
let comp
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
    // result.style.color = "red"
    // change object styles using .style followed by 
})
paperButton.addEventListener('click', () => {
    userImg.src = "../img/rps" + paperButton.id + ".png"
})
scissorsButton.addEventListener('click', () => {
    userImg.src = "../img/rps" + scissorsButton.id + ".png"
})

function compChoice () {
    const randNum = Math.floor(Math.random()*3)
    const choices = choices[randNum]
    compImg.src = "../img/rps/" + comp + ".png"
    return comp
    console.log(comp)
}

function winLose(userChoice) {
    console.log(comp, userChoice)
}

winLose('rock')




