const OPTIONS = ["PAPER", "ROCKS", "SCISSORS"];

const WINS = {
    PAPER: "ROCK",
    ROCK: "SCISSORS",
    SCISSORS: "PAPER"
}

/**
 * Function to check if player selection is valid or not
 * @param {string} selection 
 * @returns {boolean} Validity of player selection
 */
function isValid(selection) {
    if (!selection) {
        alert ("No values found. Reload to try again.");
        return false;
    }

    if (!(selection === "PAPER" || selection === "ROCK" || selection === "SCISSORS")) {
        alert ("Please select between paper rocks or scissors.");
        return false;
    }

    return true;
}

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
        alert(`You win. ${player.charAt(0) + player.slice(1).toLowerCase()} BEATS ${computer.charAt(0) + computer.slice(1).toLowerCase()}.`)
        return 1;
    }
    if (WINS[computer] === player) {
        alert(`You Lose. ${computer.charAt(0) + computer.slice(1).toLowerCase()} BEATS ${player.charAt(0) + player.slice(1).toLowerCase()}.`)
        return 2;
    } 

    alert(`It's a draw between ${player.charAt(0) + player.slice(1).toLowerCase()}s.`)
    return 0;
}

function playGame() {
    let round = 0, playerScore = 0, computerScore = 0;
    while (round < 5) {
        // Prompt the user to select an option
        const playerSelection = prompt("Paper, Rock or Scissors?" , "").toUpperCase();
        // If player selection is invalid, reprompt for a new choice
        if (!isValid(playerSelection)) {
            continue;
        }
        // Randomly generate a computer selection
        const computerSelection = computerChoice();

        const result = singleRound(playerSelection, computerSelection);
        
        // Determine winner
        if (result) {
            result === 1 ? playerScore++ : computerScore++;
        }
        round++;
        alert(`Score: Player: ${playerScore} - Computer ${computerScore}`)
    }
    if (playerScore > computerScore) {
        alert("Your win!");
    } else if (computerScore > playerScore) {
        alert("You lose!");
    } else {
        alert("It's a draw!");
    }
}

playGame();