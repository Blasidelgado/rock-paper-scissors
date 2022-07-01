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
   console.log ("right")
   return
    }
    else {
        console.log ("no values found. Select between paper rock or scissor")
    }
}
inputChecker(userChoice);


