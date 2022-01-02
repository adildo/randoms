function computerPlay() {
    let items = ["rock", "paper", "scissors"];
    return items[Math.floor(Math.random() * items.length)]
}

function playRound(playerSelection, computerSelection){
    console.log('computer chose', computerSelection)
    console.log('you chose', playerSelection)
    let result
    if (playerSelection === computerSelection){
        result = 'its a draw! you both chose ' + playerSelection[0].toUpperCase() + playerSelection.slice(1)
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = 'You lose! Paper beats Rock'
        computerScore++
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = 'You lose! Scissors beats Rock'
        computerScore++
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = 'You win! Paper beats Rock'
        playerScore++
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = 'You win! Scissors beats Paper'
        playerScore++
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = 'You lose! Rock beats Scissors'
        computerScore++
    }else {
        result = 'You win! Rock beats Scissors'
        playerScore++
    }
    outcome.textContent = result
    score.textContent = `player: ${playerScore} computer: ${computerScore}`
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0
        computerScore = 0
    }

}
 
let playerScore = 0
let computerScore = 0
const outcome = document.querySelector('#outcome')
const score = document.querySelector('#score')
score.textContent = `player: ${playerScore} computer: ${computerScore}`




const choices = document.querySelectorAll('.choice');
choices.forEach(choice => choice.addEventListener('click', () => {
    playerChoice = choice.id;
    playRound(playerChoice, computerPlay())
    
}))

    