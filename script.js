//Set global variables
let playerSelection = prompt("Rock, Paper, or Scissors?");
let computerSelection = getComputerChoice();
playerSelection = playerSelection.toLowerCase();

//Selections the computers choice at random between the three options
function getComputerChoice() {
	let options = ['rock', 'paper', 'scissors'];
	let computerChoice = options[Math.floor(Math.random()*3)];
  return computerChoice;
}

//Assesses players selection and then returns results based on comparison to computer selection along with the score column to update [player, computer, tie]
function playRound(playerSelection, computerSelection) {
	let result = [];
  if (playerSelection === "paper") {
  	if (computerSelection === 'paper'){
    	return result = [2, "It\'s a tie! You both chose Paper"]}
    else if (computerSelection === 'scissors'){
    	return result = [1, "You lose! Scissors beats Paper"]}
    else if (computerSelection === 'rock'){
    	return result = [0, "You win! Paper beats Rock."]}
  }
  else if (playerSelection === "scissors") {
  	if (computerSelection === 'paper'){
    	return result = [0, "You win! Scissors beats Paper."]}
    else if (computerSelection === 'scissors'){
    	return result = [2, "It\'s a tie! You both chose Scissors."]}
    else if (computerSelection === 'rock'){
    	return reslt = [1, "You lose! Rock beats Scissors."]} 
  }
  else if (playerSelection === "rock") {
  	if (computerSelection === 'paper') {
    	return result = [1, "You lose! Paper beats Rock."]}
    else if (computerSelection === 'scissors') {
    	return result = [0, "You win! Rock beats Scissors."]}
    else if (computerSelection === 'rock') {
    	return result = [2, "It\'s a tie! You both chose Rock."]}
  }
}
//Runs the playRound function 5 times and gives the results and updated score after each round
function game() {
	let score = [0, 0, 0];
  let Round
	for (let i = 1; i < 6; i++) {
  	computerSelection = getComputerChoice();
    Round = playRound(playerSelection, computerSelection)
    score[Round[0]]++;
    console.log(`Game ${i}: ${Round[1]} The score is: ${score[0]} to ${score[1]} with ${score[2]} ties.`);
  }
}



game();