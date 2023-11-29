let playRoundScore;
let playerScore = 0;
let computerScore = 0;

const playGame = () => {
    for (let i = 0; i < 5; i++) {
        let choices = Math.floor(Math.random() * 3) + 1;

        function getComputerChoice() {
            if (choices === 1) return 'Rock';
            if (choices === 2) return 'Paper';
            return 'Scissors';       
        }

        function playRound(playerSelection, computerSelection) {
            const win = (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
                (playerSelection === 'Paper' && computerSelection === 'Rock') ||
                (playerSelection === 'Scissors' && computerSelection === 'Paper');
            if (playerSelection === computerSelection ) return 'Draw!';
            if (win) {
                playerScore++;
                return 'You win!';
            }
            computerScore++;
            return 'Computer wins!';
        }
    

        let player = prompt('What do you choose?', '').toLowerCase();
        const playerSelection = player[0].toUpperCase() + player.slice(1);
        const computerSelection = getComputerChoice();
        playRoundScore = playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));

        console.log(`Player picks: ${[playerSelection]}`);
        console.log(`Computer picks: ${[computerSelection]}`);

    }
}

playGame();

console.log(`Computer: ${computerScore}`);
console.log(`Player: ${playerScore}`);

alert(`Computer: ${computerScore}\nPlayer: ${playerScore}`)




