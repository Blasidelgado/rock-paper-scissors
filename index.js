const OPTIONS = ["PAPER", "ROCKS", "SCISSORS"];

const WINS = {
    PAPER: "ROCK",
    ROCK: "SCISSORS",
    SCISSORS: "PAPER"
}

let round = 1, playerScore = 0, computerScore = 0;

const resultContainer = document.getElementById("result");
const playerScoreContainer = document.getElementById("player-score");
const computerScoreContainer = document.getElementById("computer-score");
const roundContainer = document.getElementById("round");

document.querySelectorAll('.btn-choice').forEach(btn => btn.addEventListener('click', e => {
    if (playerScore < 5 && computerScore < 5) {
        const playerSelection = e.target.id;
        const computerSelection = computerChoice();
        const roundResult = singleRound(playerSelection, computerSelection);
        if (roundResult) {
            roundResult === 1 ? playerScore++ : computerScore++;
            playerScoreContainer.innerText = playerScore;
            computerScoreContainer.innerText = computerScore;
            if (playerScore === 5 || computerScore === 5) {
                resultContainer.innerText = "Game has ended! "
                if (playerScore === 5) {
                    resultContainer.innerText += "You won!"
                } else if (computerScore === 5) {
                    resultContainer.innerText += "You lose!"
                } else {
                    resultContainer.innerText += "It's a draw."
                }
                document.querySelectorAll('.btn-choice').forEach(btn => btn.disabled = "true");
            }
        }
        round++;
        roundContainer.innerText = round;
    }
}));

// Function that randomly selects between paper rocks or scissors
function computerChoice () {
    const random = Math.floor(Math.random() * 3);
    const computerPlay = OPTIONS[random];

    return computerPlay;
}

/**
 * Game single round function
 * @param {string} player1 
 * @param {string} player2 
 * @returns {number} 1 for player1, 2 for player2, 0 for draw.
 */
function singleRound(player, computer) {
    if (WINS[player] === computer) {
        resultContainer.innerText = `You win. ${player.charAt(0) + player.slice(1).toLowerCase()} beats ${computer.charAt(0) + computer.slice(1).toLowerCase()}.`
        return 1;
    }

    if (WINS[computer] === player) {
        resultContainer.innerText = `You Lose. ${computer.charAt(0) + computer.slice(1).toLowerCase()} BEATS ${player.charAt(0) + player.slice(1).toLowerCase()}.`
        return 2;
    } 

    resultContainer.innerText = `It's a draw between ${player.charAt(0) + player.slice(1).toLowerCase()}s.`
    return 0;
}
