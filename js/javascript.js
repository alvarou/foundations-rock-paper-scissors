//create a function called getComputerChoice 
//that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return ['Rock', 'Paper', 'Scissors'][randomNumber];
}