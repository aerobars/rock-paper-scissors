//Set global variables
let playerSelection = ""
let score = [0, 0, 0, 0]; //Player score, computer score, tie score, round number
const roundNumber = document.querySelector('#round-score');
const playerScore = document.querySelector('#player-score');
const compScore = document.querySelector('#comp-score');
const tieScore = document.querySelector('#tie-score');
const report = document.querySelector('.round-report');
const divs = [playerScore, compScore, tieScore];

//Selections the computers choice at random between the three options
function getComputerChoice() {
	let options = ['Rock', 'Paper', 'Scissors'];
	let computerChoice = options[Math.floor(Math.random()*3)];
  return computerChoice;
}

//Assesses players selection and then returns results based on comparison to computer selection along with the score column to update [player, computer, tie]
function playRound(playerSelection) {
	let result = [];
  let computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    return result = [2, `It\'s a tie! You both chose ${playerSelection}.`]
  }
  else if (playerSelection === "Paper") {
  	if (computerSelection === 'Scissors') {
    	return result = [1, "You lose! Scissors beats Paper."]
    }
    else if (computerSelection === 'Rock') {
    	return result = [0, "You win! Paper beats Rock."]
    }
  }
  else if (playerSelection === "Scissors") {
  	if (computerSelection === 'Paper'){
    	return result = [0, "You win! Scissors beats Paper."]
    }
    else if (computerSelection === 'Rock') {
    	return result = [1, "You lose! Rock beats Scissors."]
    } 
  }
  else if (playerSelection === "Rock") {
  	if (computerSelection === 'Paper') {
    	return result = [1, "You lose! Paper beats Rock."]
    }
    else if (computerSelection === 'Scissors') {
    	return result = [0, "You win! Rock beats Scissors."]
    }
  }
}

const choices = document.querySelectorAll('button');
choices.forEach((choice) => {
  choice.addEventListener('click', () => {
  playerSelection = choice.textContent
  scoreUpdate();
  })
})

//Updates the Score and Round number, as well as gives a report of the last round
function scoreUpdate() {
  let round = playRound(playerSelection);
  roundNumber.textContent = ++score[3];
  divs[round[0]].textContent = ++score[round[0]];
  if (score[0] == 5 || score[1] == 5) {
    report.textContent = `Result: ${winnerCheck()}`;
  } else {
    report.textContent = `Result: ${round[1]}`;
  }
}

function winnerCheck() {
  if (score[0] == 5) {
    return "Congratulations! You've beaten the computer and saved humanity!";
  } else {
    return "The computer wins. Try harder next time.";
  }
}

