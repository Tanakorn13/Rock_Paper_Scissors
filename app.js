const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const clearButtonDisplay = document.getElementById('reload')
let userChoice
let computerChoice
let result


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (i) => {
  userChoice = i.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

generateComputerChoice = ()=> {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
};

getResult = () => {
  if (computerChoice === userChoice) {
    result = 'Its a draw!'
  }
  if ((computerChoice === 'rock' && userChoice === "paper")|| (computerChoice === 'paper' && userChoice === "scissors")||(computerChoice === 'scissors' && userChoice === "rock")) {
    result = 'You win!'
  }
  if ((computerChoice === 'rock' && userChoice === "scissors")||(computerChoice === 'paper' && userChoice === "rock")||(computerChoice === 'scissors' && userChoice === "paper")) {
    result = 'You lost!'
  }
  resultDisplay.innerHTML = result
}

clearButtonDisplay.addEventListener('click', () =>{
    window.location.reload(true);
});
