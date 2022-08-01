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

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return "You Lose! Scissors beats Paper";
        } else {
            return "You Win! Paper beats Rock";
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return "You Lose! Rock beats Scissors";
        } else {
            return "You Win! Scissors beats Paper";
        }
    }
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
game();
