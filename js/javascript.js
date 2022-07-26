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

    //get player and computer score and convert to integers
    let playerScore = parseInt(document.getElementById("playerScore").textContent);
    let computerScore = parseInt(document.getElementById("computerScore").textContent);    

    //if result contains "Win" or "Lose" return result
    if (result.includes("Win")) {
        document.getElementById("playerScore").textContent = ++playerScore;
    }
    if (result.includes("Lose")) {
        document.getElementById("computerScore").textContent = ++computerScore;
    }

    //if player or computer score is 5, return winner
    if (playerScore === 5) {
        document.getElementById("winner").textContent = "You Win!";
    }   if (computerScore === 5) {
        document.getElementById("winner").textContent = "You Lose!";
    }
    
}

