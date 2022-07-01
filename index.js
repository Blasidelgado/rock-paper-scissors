/*ROCK PAPER SCISSORS GAME
WE WANT TO CREATE A SIMPLE "ROCK-PAPER-SCISSORS" FOR USERS TO PLAY AGAINST COMPUTER IN A 5-ROUND GAME.
1-PROMPT FOR USER TO INPUT A VALUE
1a- VALUE IS CASE INSENSITIVE.
2- COMṔUTER RANDOMLY CHOOSES A VALUE ASWELL
3-BOTH VALUES ARE EVALUATED EVERY ROUND.
4-REPORT TO USER THE ROUND RESULT AND CURRENT SCORE
5-AFTER THE FIFTH ROUND WE DECLARE A WINNER.
(ALL ROUNDS ARE PLAYED EVEN IF THERE IS ALREADY A WINNER, I.E A 3-0 IN 3 ROUNDS).*/


//1- CREATE A VARIABLE AND STORE USER INPUT IN IT.//
let userChoice = prompt("Paper, Rock or Scissors?" , "");
userChoice = userChoice.toUpperCase();
//2- MAKE A HELPER FUNCTION TO AVOID INVALID INPUTS
function inputChecker(userChoice) {
    if (userChoice === null || userChoice === "") {
        console.log ("No values found. Reload to try again")
        return;
    }
   else if (userChoice === "PAPER" || userChoice === "ROCK" || userChoice === "SCISSOR") {
    console.log ("ready to play");
    oneRound (playerSelection, computerSelection);
    }
    else {
        console.log ("Incorrect. Restart and Select between paper rock or scissor")
        return;
    }
}
inputChecker(userChoice);
// 3- CREATE A FUNCTION FOR COMPUTER TO CREATE A RANDOM VALUE BETWEEN: ("PAPER", "ROCK", "SCIZOR")//
function computerChoice () {
    const computerOptions = ['PAPER','ROCK','SCISSOR'];
    const choiceNumber = Math.floor(Math.random()*3);
    const computerPlay = computerOptions[choiceNumber];
    return computerPlay;
}

//4- CREATE TWO FUNCTIONS TO USE FOR COMPARE USER VS COMPUTER //
function playerSelection (userChoice){
    return userChoice;
}
function computerSelection (computerChoice) {
    return computerChoice();
}
function oneRound (playerSelection, computerSelection) {
    if (playerSelection(userChoice) === computerSelection(computerChoice)) {
        console.log ('draw')
        return;
    }
    if ( playerSelection(userChoice) === "PAPER") {
        if (computerSelection(computerChoice) === "ROCK") {
            console.log ("You win! Paper beats Rock.")
            return;
        }
        else {
            console.log ("You lost! Scissor beats Paper")
            return;
        }
    }
    if (playerSelection(userChoice) === "ROCK") {
        if (computerSelection(computerChoice) === "SCISSOR") {
            console.log ("You win! Rock beats Scissor")
            return;
        }
        else {
            console.log ("You lose! Paper beats Rock.")
        }
    }
    if (playerSelection(userChoice) === "SCISSOR") {
        if (computerSelection(computerChoice) === "PAPER") {
            console.log ("You win! Scissor beats Paper");
            return;
        }
        else {
            console.log ("You lose! Rock beats Scissor")
        }
    }}