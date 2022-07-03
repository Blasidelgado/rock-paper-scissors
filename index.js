/*ROCK PAPER SCISSORS GAME
WE WANT TO CREATE A SIMPLE "ROCK-PAPER-SCISSORS" FOR USERS TO PLAY AGAINST COMPUTER IN A 5-ROUND GAME.
1-PROMPT FOR USER TO INPUT A VALUE
1a- VALUE IS CASE INSENSITIVE.
2- COMṔUTER RANDOMLY CHOOSES A VALUE ASWELL
3-BOTH VALUES ARE EVALUATED EVERY ROUND.
4-REPORT TO USER THE ROUND RESULT AND CURRENT SCORE
5-AFTER THE FIFTH ROUND WE DECLARE A WINNER.
(ALL ROUNDS ARE PLAYED EVEN IF THERE IS ALREADY A WINNER, I.E A 3-0 IN 3 ROUNDS).*/


//MAKE A HELPER FUNCTION TO AVOID INVALID INPUTS
function inputChecker(userChoice) {
    if (userChoice === null || userChoice === "") {
        alert ("No values found. Reload to try again")
        return;
    }
   else if (userChoice === "PAPER" || userChoice === "ROCK" || userChoice === "SCISSORS") {
     return;
    }
    else {
        alert ("Incorrect. Restart and Select between paper rock or scissors")
        return;
    }
}
//CREATE A FUNCTION FOR COMPUTER TO CREATE A RANDOM VALUE BETWEEN: ("PAPER", "ROCK", "SCIZOR")//
    function computerChoice () {
    const computerOptions = ['PAPER','ROCK','SCISSORS'];
    const choiceNumber = Math.floor(Math.random()*3);
    const computerPlay = computerOptions[choiceNumber];
    return computerPlay;
}

//CREATE TWO FUNCTIONS TO USE FOR COMPARE USER VS COMPUTER //
function playerSelection (userChoice){
    return userChoice;
}
function computerSelection (computerChoice) {
    return computerChoice();
}
//CREATE ROUND FUNCTION
function playRound (playerSelection, computerSelection) {
    //1- CREATE A VARIABLE AND STORE USER INPUT IN IT.//
    let userChoice = prompt("Paper, Rock or Scissors?" , "");
    //1a Make the user input case insensitive
    userChoice = userChoice.toUpperCase();
    //1b Helper variable to input in case draw.
    inputChecker(userChoice);
    //5a- Game main engine
    if (playerSelection(userChoice) === computerSelection(computerChoice)) {
        alert(`Computer chooses ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase()}`); alert ("It's a draw.");
        return;
    }
    if ( playerSelection(userChoice) === "PAPER") {
        if (computerSelection(computerChoice) === "ROCK") {
            alert ("Computer chooses Rock"); alert ("You win! Paper beats Rock.");
            return true;
        }
        else {
            alert ("Computer chooses Scissors"); alert ("You lost! Scissors beats Paper");
            return false;
        }
    }
    if (playerSelection(userChoice) === "ROCK") {
        if (computerSelection(computerChoice) === "SCISSOR") {
            alert ("Computer chooses Scissor"); alert("You win! Rock beats Scissor");
            return true;
        }
        else {
            alert ("Computer chooses Paper"); alert ("You lose! Paper beats Rock.");
            return false;
        }
    }
    if (playerSelection(userChoice) === "SCISSORS") {
        if (computerSelection(computerChoice) === "PAPER") {
            alert ("Computer chooses Paper"); alert ("You win! Scissor beats Paper");
            return true;
        }
        else {
            alert ("Computer chooses Rock"); alert ("You lose! Rock beats Scissor");
            return false
        }
    }
}
//CREATE
function game (playRound) {
    let gameCount = 0;
    let playerScore = 0;
    let computerScore = 0;
    while (gameCount < 5) {
    switch (playRound(playerSelection, computerSelection)) {
        case true: 
        playerScore++;
        alert (`Player ${playerScore} - ${computerScore} Computer`);
        break;
        case false: 
        computerScore++;
        alert (`Player ${playerScore} - ${computerScore} Computer`)
        break;
        default:
        alert (`Player ${playerScore} - ${computerScore} Computer`)
    }
    gameCount++;
    }
    if (playerScore > computerScore) {
        alert (`You won ${playerScore} - ${computerScore}`)
    }
    else if (computerScore === playerScore) {
        alert (`It's a ${playerScore} - ${computerScore} draw`)
    }
    else {
        alert (`You lost ${playerScore} - ${computerScore}`)
    }
}
game(playRound);