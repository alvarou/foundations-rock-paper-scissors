//Randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return ['Rock', 'Paper', 'Scissors'][randomNumber];
}

//Plays a single round of Rock Paper Scissors. 
//Takes two parameters - the playerSelection and computerSelection - 
//Returns a string that declares the winner of the round 
//Users can input rock, ROCK, RocK or any other variation
function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    //initialize result variable
    let result = "";

    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            result = "You Lose! Paper beats Rock";
        } else {
            result = "You Win! Rock beats Scissors";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            result = "You Lose! Scissors beats Paper";
        } else {
            result = "You Win! Paper beats Rock";
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            result = "You Lose! Rock beats Scissors";
        } else {
            result = "You Win! Scissors beats Paper";
        }
    }

   // console.log(result);
    document.getElementById("result").textContent = result;

}

//Plays a game of 5 rounds of  Rock Paper Scissors with the user
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper, or Scissors?");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

//call the function playGame
//game();
