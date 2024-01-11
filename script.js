// Creating the constants that are present in the HTML file.

const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')
const playerChoice = document.getElementById('playerChoice')
const computerChoice = document.getElementById('computerChoice')
const endgameAlert = document.getElementById('endgameAlert')
const endgameMsg = document.getElementById('endgameMsg')

// The R-P-S function.

let playRoundScore = ''
let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
    const win = (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
                (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
                (playerSelection === 'SCISSORS' && computerSelection === 'PAPER');
    if (playerSelection === computerSelection) {
            playRoundScore = 'draw'
    } if (win) {
        playerScore++;
        playRoundScore = 'player'
    } else {
        computerScore++;
        playRoundScore = 'computer'
    }
    updateScoreMessage(playRoundScore, playerSelection, computerSelection)
}
// The Function that makes the computer choose a random choice.

 function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
      if (randomNumber === 1) return 'ROCK';
      if (randomNumber === 2) return 'PAPER';
      return 'SCISSORS';       
  }


// This is the function that declares that the game has ended when either the player or computer has reached 5.

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}

// Function to capitalize first letter.

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

// Adding a event to each button correspond with each choice.

rockBtn.addEventListener('click', () => btnClick ('ROCK'))
paperBtn.addEventListener('click', () => btnClick ('PAPER'))
scissorsBtn.addEventListener('click', () => btnClick ('SCISSORS'))

// The Function that when the player clicks on a button, the computer will choose as well and then play a round and then checks if the player or computer reached 5.
function btnClick(playerSelection) {
    if (isGameOver()) {
        openEndgameAlert()
        return
    }

    const computerSelection = getRandomChoice()
    playRound(playerSelection, computerSelection)
    updateChoices(playerSelection, computerSelection)
    updateScore()
  
    if (isGameOver()) {
      openEndgameAlert()
      setFinalMessage()
    }
}


// This function shows what the player and the computer chose in the score-box. 

function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'ROCK':
            playerChoice.textContent ='Rock'
            break;
        case 'PAPER':
            playerChoice.textContent ='Paper'
            break;
        case 'SCISSORS':
            playerChoice.textContent ='Scissors'
            break;
    }

    switch (computerSelection) {
        case 'ROCK':
            computerChoice.textContent = 'Rock'
            break;
        case 'PAPER':
            computerChoice.textContent = 'Paper'
            break;
        case 'SCISSORS':
            computerChoice.textContent = 'Scissors'
            break;
    }
}

// This function updates the top title with the result from the choices.

function updateScore() {
    if (playRoundScore === 'draw') {
        scoreInfo.textContent = "It's a draw!"
    } 
    else if (playRoundScore === 'player') {
        scoreInfo.textContent = 'You won!'
    } 
    else if (playRoundScore === 'computer') {
        scoreInfo.textContent = 'You lost!'
    }

    playerScorePara.textContent = `Player: ${playerScore}`
    computerScorePara.textContent = `Computer: ${computerScore}`
}

// This function updates the middle score results with who wins or if it's a draw.

function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} beats ${computerSelection.toLowerCase()}`
        return
    }
    if (winner === 'computer') {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} is beaten by ${computerSelection.toLowerCase()}`
        return
    }
    scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} draws with ${computerSelection.toLowerCase()}`
}

// These two functions opens the end of game alert, applies the overlay, shows the final result of the Best of 5 and then closes the end of game alert.

const overlay = document.getElementById('overlay')
overlay.addEventListener('click', closeEndgameAlert)

function openEndgameAlert() {
    endgameAlert.classList.add('active')
    overlay.classList.add('active')
}

function closeEndgameAlert () {
    endgameAlert.classList.remove('active')
    overlay.classList.remove('active')
}

function setFinalMessage() {
    return playerScore > computerScore
        ? (endgameMsg.textContent = 'You won!')
        : (endgameMsg.textContent = 'You lost!')
}


// This function resets the game to the original state.

const restartBtn = document.getElementById('restartBtn')
restartBtn.addEventListener('click', restartGame)

function restartGame() {
    playerScore = 0
    computerScore = 0
    scoreInfo.textContent = 'What do you pick?'
    scoreMessage.textContent = 'First to score 5 points wins the game'
    playerScorePara.textContent = 'Player: 0'
    computerScorePara.textContent = 'Computer: 0'
    playerChoice.textContent = '-'
    computerChoice.textContent = '-'
    endgameAlert.classList.remove('active')
    overlay.classList.remove('active')

}
// The R-P-S function.