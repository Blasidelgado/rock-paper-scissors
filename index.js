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
//2- MAKE A HELPER FUNCTION TO AVOID INVALID INPUTS
function inputChecker(userChoice) {
    if (userChoice === null || userChoice === "") {
        alert ("No values found. Reload to try again")
        return;
    }
    userChoice = userChoice.toUpperCase();
   if (userChoice === "PAPER" || userChoice === "ROCK" || userChoice === "SCISSOR") {
    console.log ("ready to play");
    playerSelection(userChoice);
    computerSelection(computerChoice);
    }
    else {
        console.log ("no values found. Select between paper rock or scissor")
        return;
    }
}
inputChecker(userChoice);
// 3- CREATE A FUNCTION FOR COMPUTER TO CREATE A RANDOM VALUE BETWEEN: ("PAPER", "ROCK", "SCIZOR")//
function computerChoice () {
    const computerOptions = ['paper','rock','scissors'];
    const choiceNumber = Math.floor(Math.random()*3);
    const computerPlay = computerOptions[choiceNumber];
    return computerPlay;
}

//4- CREATE TWO FUNCTIONS TO USE FOR COMPARE USER VS COMPUTER //
function playerSelection (userChoice){
    console.log (userChoice);
    return userChoice;
}
function computerSelection (computerChoice) {
    console.log (computerChoice());
    return computerChoice();
}
